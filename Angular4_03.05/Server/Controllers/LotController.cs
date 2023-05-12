using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using Server.Models;
using System.Text.Json;

namespace Server
{
    [Route("api/[controller]")]
    [ApiController]
    public class LotController : Controller
    {
        QueueServiceClient service;
        
        public LotController(QueueServiceClient service){
            this.service = service;
        }
        [HttpPost]
        public async Task<ActionResult<Lot>> SetLot(Lot lot)
        {
            QueueClient client = await CreateQueueClient("lots");
            string jsonlot = JsonSerializer.Serialize(lot);
            await client.SendMessageAsync(jsonlot, timeToLive: TimeSpan.FromDays(1),visibilityTimeout: TimeSpan.FromSeconds(1));
            return lot;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lot>>> GetLots()
        {
            QueueClient client = await CreateQueueClient("lots");
            var azureresponse = await client.PeekMessagesAsync(maxMessages:10);
            PeekedMessage[] messages = azureresponse.Value;
            List<Lot> list = new List<Lot>();
            foreach(var item in messages)
                list.Add(JsonSerializer.Deserialize<Lot>(item.Body)!);
            return list;
        }
        [HttpGet("from/{from}")]
        public async Task<ActionResult<IEnumerable<Lot>>> GetLotsFrom(string from)
        {
            QueueClient client = await CreateQueueClient("lots");
            var azureresponse = await client.PeekMessagesAsync(maxMessages:10);
            PeekedMessage[] messages = azureresponse.Value;
            List<Lot> list = new List<Lot>();
            foreach(var item in messages)
                list.Add(JsonSerializer.Deserialize<Lot>(item.Body)!);
            return list.Where(t=>t.OwnerCurrency==from).ToList();
        }
        [HttpGet("to/{to}")]
        public async Task<ActionResult<IEnumerable<Lot>>> GetLotsTo(string to)
        {
            QueueClient client = await CreateQueueClient("lots");
            var azureresponse = await client.PeekMessagesAsync(maxMessages:10);
            PeekedMessage[] messages = azureresponse.Value;
            List<Lot> list = new List<Lot>();
            foreach(var item in messages)
                list.Add(JsonSerializer.Deserialize<Lot>(item.Body)!);
            return list.Where(t=>t.RequiredCurrency==to).ToList();
        }
        [HttpGet("{from}/{to}")]
        public async Task<ActionResult<IEnumerable<Lot>>> GetLots(string from,string to)
        {
            QueueClient client = await CreateQueueClient("lots");
            var azureresponse = await client.PeekMessagesAsync(maxMessages:10);
            PeekedMessage[] messages = azureresponse.Value;
            List<Lot> list = new List<Lot>();
            foreach(var item in messages)
                list.Add(JsonSerializer.Deserialize<Lot>(item.Body)!);
            return list.Where(t=>t.OwnerCurrency==from&&t.RequiredCurrency==to).ToList();
        }
        private async Task<QueueClient> CreateQueueClient(string QueueName)
        {
            //QueueServiceClient queueService = new QueueServiceClient(connStr);
            QueueClient queue= this.service.GetQueueClient(QueueName);
            await queue.CreateIfNotExistsAsync();
            return queue;
        }
    }
}