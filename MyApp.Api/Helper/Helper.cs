using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WilbertFuneral.Web.Helpers.DtoOutPut
{
    public class DtoOutput<T>
    {
        public DtoOutput(T data)
        {
            this.Data = data;
        }

        public DtoOutput(bool Success, String Message)
        {
            this.Message = Message;
            this.Success = Success;
        }

        public DtoOutput(bool Success, String Message, T Data)
        {
            this.Data = Data;
            this.Message = Message;
            this.Success = Success;
        }

        public bool Success { get; set; } = false;

        public string Message { get; set; } = "";

        public T Data { get; set; }
    }
}
