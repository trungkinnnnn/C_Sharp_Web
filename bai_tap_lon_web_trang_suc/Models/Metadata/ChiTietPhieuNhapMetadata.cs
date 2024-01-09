using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace bai_tap_lon_web_trang_suc.Models.Metadata
{
    public class ChiTietPhieuNhapMetadata
    {
        public int ID_ChiTietPhieuNhap { get; set; }
       
        public Nullable<int> ID_PhieuNhap { get; set; }
       
        public Nullable<int> ID_SanPham { get; set; }
        [DisplayName("Đơn giá")]
        [Required(ErrorMessage = "Đơn giá không được để trống")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Đơn giá phải lớn hơn 0")]
        public Nullable<double> DonGia { get; set; }
        [DisplayName("Số lượng")]
        [Required(ErrorMessage = "Số lượng không được để trống")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Số lưọng phải lớn hơn 0")]
        public Nullable<int> SoLuong { get; set; }
    }
}