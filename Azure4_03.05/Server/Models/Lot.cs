using System.ComponentModel.DataAnnotations;

namespace Server.Models
{

public class Lot{
    public string OwnerCurrency {get;set;} = default!;
    public string RequiredCurrency {get;set;} = default!;
    public string OwnerName {get;set;} = default!;
    public double Price {get;set;}=default!;
    

}
}