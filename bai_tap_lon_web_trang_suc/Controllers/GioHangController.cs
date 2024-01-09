using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using bai_tap_lon_web_trang_suc.Controllers;
using System.Data.Entity.Validation;

namespace bai_tap_lon_web_trang_suc.Controllers
{
    public class GioHangController : SessionController
    {
        web_trang_sucEntities db = new web_trang_sucEntities();

        [HttpGet]
        public ActionResult Index()
        {
            int? id_khachhang = Get_User();
            ViewBag.sanphamnull = false;
            ViewBag.soluonggiohang = demsanphamtronggiohang();
            if (id_khachhang != null)
            {
                var giohang = db.GioHangs.FirstOrDefault(m => m.ID_KhachHang == id_khachhang);
                if (giohang != null)
                {
                    ViewBag.sanphamnull = true;
                    var danhsach = db.ChiTietGioHangs.Where(ctgh => ctgh.ID_GioHang == giohang.ID_GioHang).ToList();
                    return View(danhsach);
                }
            }
            return View();
        }
        [HttpPost]
        public ActionResult Index(int giohang)
        {
            var danhsach = db.ChiTietGioHangs.Where(ctgh => ctgh.ID_GioHang == giohang).ToList();
            if (danhsach == null) ViewBag.sanphamnull = false;
            else ViewBag.sanphamnull = true;
            return View(danhsach);
        }

        public ActionResult AddToCart(int? sanpham)
        {
            try
            {
                if (sanpham == null)
                {
                    ViewBag.sanphamnull = false;
                    return RedirectToAction("Index");
                }
                else
                {
                    ViewBag.sanphamnull = true;

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
                            SoLuong = 1,
                            DonGia = find_sp.GiaBan,
                            GiamGia = find_sp.GiamGia,
                            HinhAnh = find_sp.HinhAnh
                        });
                    }
                    else
                    {
                        check_sp.SoLuong += 1;
                    }
                    db.SaveChanges();
                    return RedirectToAction("Index", new { giohang = id_giohang });
                }
            }
            catch (DbEntityValidationException ex)
            {
                Console.WriteLine("loi" + ex.Message);
            }
            return RedirectToAction("ChiTietSanPham", "ChiTietSanPham", new { id = sanpham });
        }
    
        public ActionResult up_number(int id_ctgh, int number)
        {
            var chiTietGioHang = db.ChiTietGioHangs.Find(id_ctgh);

            if (chiTietGioHang != null)
            {
                // Đảm bảo số lượng không âm
                chiTietGioHang.SoLuong += number;
                if (chiTietGioHang.SoLuong > 0)
                {
                    db.SaveChanges();
                }
            }
            return RedirectToAction("Index", new { id_giohang = chiTietGioHang.ID_GioHang });
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
        public ActionResult xoa_sanpham(int? id_ctgh)
        {
            var find_ctgh = db.ChiTietGioHangs.Find(id_ctgh);
            if (find_ctgh != null)
            {
                db.ChiTietGioHangs.Remove(find_ctgh);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }
        public ActionResult form_DatHang()
        {
            int? khachhang = Get_User();
            ViewBag.soluonggiohang = demsanphamtronggiohang();
            if (khachhang != null)
            {
                var thongtinkh = db.KhachHangs.Find(khachhang);
                var giohang = db.GioHangs.FirstOrDefault(m => m.ID_KhachHang == khachhang);
                if (giohang != null)
                {
                    ViewBag.danhsachGH = db.ChiTietGioHangs.Where(ctgh => ctgh.ID_GioHang == giohang.ID_GioHang).ToList();
                }
                return View(thongtinkh);
            }
            return View();

        }
        [HttpPost]
        public ActionResult form_DatHang(KhachHang model)
        {
            var update = db.KhachHangs.Find(model.ID_KhachHang);
            update.HoTen = model.HoTen;
            update.SDT = model.SDT;
            update.Email = model.Email;
            update.DiaChi = model.DiaChi;
            db.SaveChanges();

            var giohang = db.GioHangs.FirstOrDefault(m => m.ID_KhachHang == model.ID_KhachHang);
            if (giohang != null)
            {
                ViewBag.danhsachGH = db.ChiTietGioHangs.Where(ctgh => ctgh.ID_GioHang == giohang.ID_GioHang).ToList();
            }
            return View(model);
        }
    }
}

