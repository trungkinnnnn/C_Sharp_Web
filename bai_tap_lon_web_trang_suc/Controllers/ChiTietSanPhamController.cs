using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using bai_tap_lon_web_trang_suc.Controllers;
namespace WebNangCao.Controllers
{
    public class ChiTietSanPhamController : SessionController
    {
        private web_trang_sucEntities db = new web_trang_sucEntities();

        // GET: ChiTietSanPham/Details/{id}
        public ActionResult ChiTietSanPham(int id)
        {
            // Lấy thông tin chi tiết sản phẩm từ cơ sở dữ liệu
            var product = db.SanPhams.Find(id);
            ViewBag.soluonggiohang = demsanphamtronggiohang();

            // Truyền thông tin sản phẩm đến view
            return View(product);
        }
        public ActionResult AddToCart(int? sanpham , int soluong)
        {
            try
            {
                int? khachhang = Get_User();

                int id_giohang = check_giohang(khachhang);
                var find_sp = db.SanPhams.Find(sanpham);
                var check_sp = db.ChiTietGioHangs.Where(ctgh => ctgh.ID_GioHang == id_giohang && ctgh.ID_SanPham == sanpham).FirstOrDefault();
                if (check_sp == null)
                {
                    db.ChiTietGioHangs.Add(new ChiTietGioHang
                    {
                        ID_GioHang = id_giohang,
                        ID_SanPham = sanpham,
                        SoLuong = soluong,
                        DonGia = find_sp.GiaBan,
                        GiamGia = find_sp.GiamGia,
                        HinhAnh = find_sp.HinhAnh
                    });
                }
                else
                {
                    check_sp.SoLuong += soluong;
                }
                
                db.SaveChanges();
                return RedirectToAction("Index", "GioHang" ,new { giohang = id_giohang });
            }
            catch (Exception ex)
            {
                Console.WriteLine("loi" + ex.Message);
            }
            return RedirectToAction("ChiTietSanPham", "ChiTietSanPham", new { id = sanpham });
        }
        private int check_giohang(int? khachhang)
        {
            var GioHang = db.GioHangs.FirstOrDefault(g => g.ID_KhachHang == khachhang);
            if (GioHang == null)
            {
                var newCart = new GioHang { ID_KhachHang = khachhang };
                db.GioHangs.Add(newCart);
                db.SaveChanges();

                return newCart.ID_GioHang;
            }
            return GioHang.ID_GioHang;
        }
    }
}
