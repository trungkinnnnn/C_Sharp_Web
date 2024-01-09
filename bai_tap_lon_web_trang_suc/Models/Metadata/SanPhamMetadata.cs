using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace bai_tap_lon_web_trang_suc.Models.Metadata
{
    public class SanPhamMetadata
    {
        public int ID_SanPham { get; set; }
        [DisplayName("Tên Sản phẩm")]
        [Required(ErrorMessage = "Tên Sản phẩm không được để trống")]
        public string TenSanPham { get; set; }
        public string ID_LoaiSanPham { get; set; }
        public string MoTa { get; set; }
        public Nullable<int> SoLuong { get; set; }
        [DisplayName("Giá bán")]
        [Required(ErrorMessage = "Giá bán không được để trống")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Giá bán phải lớn hơn 0")]
        public Nullable<double> GiaBan { get; set; }
        [DisplayName("Giảm giá")]
        [Required(ErrorMessage = "Giảm giá không được để trống")]
        [Range(0.00, double.MaxValue, ErrorMessage = "Giảm giá phải lớn hơn 0")]
        public Nullable<double> GiamGia { get; set; }
        public string HinhAnh { get; set; }
    }
}