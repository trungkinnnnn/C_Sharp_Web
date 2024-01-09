using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class HomeController : User_SessionController
    {
        web_trang_sucEntities db = new web_trang_sucEntities();
        // GET: Admin/Home
        public ActionResult Index()
        {
            if(Get_User_Admin() == null)
            {
                return RedirectToAction("DangNhap", "DangNhap");
            }    
            ViewBag.session_admin = Get_User_Admin();

            ViewBag.sanphamsaphet = get_sp_het_sl();
            ViewBag.donhangchuaduyet = get_don_hang_chuaduyet();
            ViewBag.donhangmoi = get_donhangmoi();
            ViewBag.cacnam = danhsachnam();
            var thongKeDonHang = GetThongKeDonHang(2023);
            ViewBag.ChartData = thongKeDonHang;

            return View();
        }
        [HttpPost]
        public ActionResult Index(int nam)
        {
            if (Get_User_Admin() == null)
            {
                return RedirectToAction("DangNhap", "DangNhap");
            }
            ViewBag.session_admin = Get_User_Admin();
            
            ViewBag.sanphamsaphet = get_sp_het_sl();
            ViewBag.donhangchuaduyet = get_don_hang_chuaduyet();
            ViewBag.donhangmoi = get_donhangmoi();
            ViewBag.cacnam = danhsachnam();
            ViewBag.namchon = nam;
            var thongKeDonHang = GetThongKeDonHang(nam);
            ViewBag.ChartData = thongKeDonHang;

            return View();
        }

        private Dictionary<string, decimal> GetThongKeDonHang(int nam)
        {
            var thongKeDonHang = db.DonHangs
                .Where(d => d.TrangThai == 1 && d.NgayDat.HasValue && d.NgayDat.Value.Year == nam)
                .GroupBy(d => d.NgayDat.Value.Month)
                .Select(g => new { Month = g.Key, TotalTongTien = g.Sum(d => d.TongTien) })
                .ToDictionary(g => $"Tháng {g.Month}", g => (decimal)g.TotalTongTien);
            return thongKeDonHang;
        }

        public int[] danhsachnam()
        {
            var cacnam = db.DonHangs
                    .Select(dh => dh.NgayDat.Value.Year)
                    .Distinct()
                    .OrderByDescending(year => year)
                    .ToArray();
            return cacnam;
        }

        public ActionResult DonHangmoi()
        {
            ViewBag.sanphamsaphet = get_sp_het_sl();
            ViewBag.donhangchuaduyet = get_don_hang_chuaduyet();
            ViewBag.donhangmoi = get_donhangmoi();
            DateTime today = DateTime.Now.Date;
            var donhang_moi = db.DonHangs.Where(m => m.NgayDat == today && m.TrangThai == null).ToList();
            return View(donhang_moi);
        }

        public ActionResult SanPhamSapHet()
        {
            ViewBag.sanphamsaphet = get_sp_het_sl();
            ViewBag.donhangchuaduyet = get_don_hang_chuaduyet();
            ViewBag.donhangmoi = get_donhangmoi();
            var sanpham_het = db.SanPhams.Where(m => m.SoLuong < 50).ToList();
            return View(sanpham_het);
        }
        public ActionResult donhangchuaduyet()
        {
            ViewBag.sanphamsaphet = get_sp_het_sl();
            ViewBag.donhangchuaduyet = get_don_hang_chuaduyet();
            ViewBag.donhangmoi = get_donhangmoi();
            var donhang_chuaduyet = db.DonHangs.Where(m => m.TrangThai == null).ToList();
            return View(donhang_chuaduyet);
        }


    }



}