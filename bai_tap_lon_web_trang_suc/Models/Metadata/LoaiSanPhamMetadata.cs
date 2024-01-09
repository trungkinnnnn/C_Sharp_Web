using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.ModelBinding;

namespace bai_tap_lon_web_trang_suc.Models.Metadata
{
    public class LoaiSanPhamMetadata
    {
        [DisplayName("ID Loại sản phẩm")]
        [Required(ErrorMessage = "ID Loại sản phẩm không được để trống")]
        public string ID_loaiSanPham { get; set; }
        
        [DisplayName("Loại sản phẩm")]
        [Required(ErrorMessage = "ID Loại sản phẩm không được để trống")]
        public string TenloaiSanPham { get; set; }
        
    }
}