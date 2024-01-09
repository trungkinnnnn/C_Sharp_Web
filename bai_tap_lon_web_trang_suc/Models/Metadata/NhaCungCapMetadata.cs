using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace bai_tap_lon_web_trang_suc.Models.Metadata
{
    public class NhaCungCapMetadata
    {
        public string ID_NhaCungCap { get; set; }
        [DisplayName("Tên nhà cung cấp")]
        [Required(ErrorMessage = "Tên nhà cung cấp không được để trống")]
        public string TenNhaCungCap { get; set; }
        [DisplayName("Số điện thoại nhà cung cấp")]
        [Required(ErrorMessage = "Số điện thoại nhà cung cấp không được để trống")]
        public string SDT { get; set; }
        public string Email { get; set; }
    }
}