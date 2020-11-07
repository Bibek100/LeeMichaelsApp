using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyApp.Api.AppDbContext;
using MyApp.Api.Dto;
using MyApp.Api.model;
using WilbertFuneral.Web.Helpers.DtoOutPut;

namespace MyApp.Api.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private readonly DatabaseContext databaseContext;

        public ItemController(DatabaseContext db)
        {
            this.databaseContext = db;
        }
        
        [HttpGet("getAll")]
        public IActionResult GetAllItems()
        {
            var items = databaseContext.Items.ToList();
            databaseContext.SaveChanges();

            return Ok(items);
        }

        [HttpGet("get/{id}")]
        public IActionResult GetItems(int id)
        {
            var item = databaseContext.Items.Where(x => x.Id == id).FirstOrDefault();
            databaseContext.SaveChanges();

            return Ok(item);
        }


        [HttpPost("post")]
        public IActionResult PostItem(ItemRequestDto request)
        {
            try
            {
                Item item = new Item();
                item.User_Initials = request.InitialFirst + request.InitialSecond + request.InitialThird;
                item.Material = request.Material;
                item.Size = request.Size;
                item.User_FullName = request.User_FullName;

                databaseContext.Items.Add(item);
                databaseContext.SaveChanges();

                return Ok(new DtoOutput<int>(true, "Successfully saved your item choice!"));
            }
            catch
            {
                return Ok(new DtoOutput<int>(false, "Something went wrong! Please try again."));
            }
           
        }
    }
}
