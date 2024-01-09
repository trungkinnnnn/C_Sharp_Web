using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.ModelBinding;
using System.ComponentModel;

namespace bai_tap_lon_web_trang_suc.Models.Metadata
{
    public class PhieuNhapMetadata
    {
        public int ID_PhieuNhap { get; set; }
        public string TaiKhoan { get; set; }
        public string ID_NhaCungCap { get; set; }
        public Nullable<System.DateTime> NgayNhap { get; set; }
    }
}