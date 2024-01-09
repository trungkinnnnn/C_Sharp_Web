using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class DonHangController : User_SessionController
    {
        // GET: Admin/DonHang
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult DanhSach()
        {
            return View(db.DonHangs.ToList());
        }
        [HttpPost]
        public ActionResult DanhSach(int? filterStatus)
        {
            List<DonHang> danhsachdonhang = new List<DonHang>();
            danhsachdonhang = db.DonHangs.ToList();
            if (filterStatus.HasValue)
            {
               
                if (filterStatus == 0 || filterStatus == 1)
                {
                    danhsachdonhang = db.DonHangs.Where(m => m.TrangThai == filterStatus).ToList();
                }else 
                {
                    danhsachdonhang = db.DonHangs.Where(m => m.TrangThai == null).ToList();
                }  
            }
            ViewBag.FilterStatus = filterStatus;
            return View(danhsachdonhang);
           
        }
        public ActionResult ChiTietDonHang(int id)
        {
            if(id == null)
            {
                return RedirectToAction("DanhSach");
            }
            var donhang = db.DonHangs.FirstOrDefault(m => m.ID_DonHang == id);
            ViewBag.ID_DonHang = donhang.ID_DonHang;

            var danhsachdonhang = db.ChiTietDonHangs.Where(m => m.ID_DonHang == id).ToList();
           
            return View(danhsachdonhang);
        }
        public ActionResult KhachHang(int id)
        {
            var khachhang = db.KhachHangs.FirstOrDefault(m => m.ID_KhachHang == id);
            return View(khachhang);   
        }

        public ActionResult Duyet_DH(int id,int trangthai)
        {
            var donhang = db.DonHangs.FirstOrDefault(m => m.ID_DonHang == id);
            if(trangthai == 1)
            {
                donhang.TrangThai = 1;
            }else if(trangthai == 0)
            {
                donhang.TrangThai = 0;
            }
            else
            {
                donhang.TrangThai = null;
            }
            db.SaveChanges();
            UpdateSoLuong();
            return RedirectToAction("DanhSach");
        }
    }
}