using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace bai_tap_lon_web_trang_suc.Controllers
{

    public class DatHangController : SessionController
    {
        // GET: DatHang
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult DanhSachDonHang()
        {
            int id_khachhang = Get_User();
            var donhang = db.DonHangs.Where(m => m.ID_KhachHang == id_khachhang).ToList();
            ViewBag.soluonggiohang = demsanphamtronggiohang();
            return View(donhang);
        }
        public ActionResult ChiTietDonHang(int id)
        {
            var chitietdonhang = db.ChiTietDonHangs.Where(m => m.ID_DonHang == id).ToList();
            return View(chitietdonhang);
        }

        public ActionResult Xoa_DH(int id)
        {
            var donhang = db.DonHangs.FirstOrDefault(m => m.ID_DonHang == id);
            db.DonHangs.Remove(donhang);
            db.SaveChanges();
            return RedirectToAction("DanhSachDonHang");
        }
        public ActionResult DatHang()
        {
            try
            {
                int id_khachhang = Get_User();
                var khachhang = db.KhachHangs.Find(id_khachhang);
                DonHang newDonHang = new DonHang
                {
                    NgayDat = DateTime.Today,
                    ID_KhachHang = id_khachhang,
                    DiaChi = khachhang.DiaChi,
                    TongTien = 0,
                };
                db.DonHangs.Add(newDonHang);
                db.SaveChanges();

                int id_donhang = newDonHang.ID_DonHang;

                var id_giohang = db.GioHangs.FirstOrDefault(m => m.ID_KhachHang == id_khachhang);
                var danhsachgiohang = db.ChiTietGioHangs.Where(ctgh => ctgh.ID_GioHang == id_giohang.ID_GioHang).ToList();
                foreach (var item in danhsachgiohang)
                {
                    ChiTietDonHang ctdhCreate = new ChiTietDonHang
                    {
                        ID_DonHang = id_donhang,
                        ID_SanPham = item.ID_SanPham,
                        SoLuong = item.SoLuong,
                        GiaBan = item.DonGia,
                        GiamGia = item.GiamGia
                    };
                    db.ChiTietDonHangs.Add(ctdhCreate);

                }

                db.SaveChanges();
                db.ChiTietGioHangs.RemoveRange(danhsachgiohang);



                var tongtien = db.ChiTietDonHangs.Where(m => m.ID_DonHang == id_donhang)
                                                .Sum(m => (m.GiaBan - m.GiaBan * m.GiamGia / 100) * m.SoLuong);

                var donhang = db.DonHangs.Find(id_donhang);
                donhang.TongTien = tongtien;
                db.SaveChanges();
                return RedirectToAction("DanhSachDonHang");


            }
            catch (DbUpdateException ex)
            {
                // In ra thông tin chi tiết về lỗi
                Console.WriteLine(ex.Message);

                // Nếu có inner exception, in ra thông tin chi tiết của nó
                if (ex.InnerException != null)
                {
                    Console.WriteLine("Inner Exception:");
                    Console.WriteLine(ex.InnerException.Message);
                }
            }
            return RedirectToAction("form_DatHang", "GioHang");
        }
    }
}