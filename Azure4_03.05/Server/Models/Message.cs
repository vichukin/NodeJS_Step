using System.ComponentModel.DataAnnotations;

namespace Server.Models
{

public class Message{
    public string MessageId { get; set; } = default!;
	public string PopReceipt { get; set; } = default!;
    public Lot Lot {get;set;} = default!;
    

}
}