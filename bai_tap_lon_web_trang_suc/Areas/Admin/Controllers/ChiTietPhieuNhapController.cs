using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class ChiTietPhieuNhapController : Controller
    {
        // GET: Admin/ChiTietPhieuNhap
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult DanhSach()
        {
            return View(db.ChiTietPhieuNhaps.ToList());
        }
        [HttpGet]
        public ActionResult DS_PartialView_CTPN(int? id)
        {
            var danhsachchitietphieunhap = db.ChiTietPhieuNhaps.Where(m => m.ID_PhieuNhap == id);
            return PartialView("_PartialPage_CTPN", danhsachchitietphieunhap);
        }
        [HttpPost]
        public ActionResult DanhSach(int id_PN, int id_SP)
        {
            IQueryable<ChiTietPhieuNhap> danhSachChiTietPhieuNhap;

            ViewBag.ID_PN = id_PN;
            ViewBag.ID_SP = id_SP;
            if (id_PN == 0 && id_SP == 0) // Nếu chọn "All"
            {
                danhSachChiTietPhieuNhap = db.ChiTietPhieuNhaps.AsQueryable();
            }
            else if (id_PN != 0 && id_SP != 0) // Nếu đã chọn cả "Phiếu Nhập" và "Sản Phẩm"
            {
                danhSachChiTietPhieuNhap = db.ChiTietPhieuNhaps
                    .Where(ct => ct.ID_PhieuNhap == id_PN && ct.ID_SanPham == id_SP);
            }
            else if (id_PN != 0) // Nếu chỉ chọn "Phiếu Nhập"
            {
                danhSachChiTietPhieuNhap = db.ChiTietPhieuNhaps
                    .Where(ct => ct.ID_PhieuNhap == id_PN);
            }
            else // Nếu chỉ chọn "Sản Phẩm"
            {
                danhSachChiTietPhieuNhap = db.ChiTietPhieuNhaps
                    .Where(ct => ct.ID_SanPham == id_SP);
            }

            return View(danhSachChiTietPhieuNhap.ToList());
        }

        public ActionResult Them_CTPN()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Them_CTPN(ChiTietPhieuNhap model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(model);
                }
                var existingCTPN = db.ChiTietPhieuNhaps
          .FirstOrDefault(ct => ct.ID_PhieuNhap == model.ID_PhieuNhap && ct.ID_SanPham == model.ID_SanPham);

                if (existingCTPN != null)
                {
                    // Nếu đã tồn tại, cập nhật số lượng
                    existingCTPN.SoLuong += model.SoLuong;
                }
                else
                {
                    // Nếu không tồn tại, thêm mới chi tiết phiếu nhập
                    db.ChiTietPhieuNhaps.Add(model);
                }

                var kt = db.SaveChanges();
                if (kt > 0)
                {
                    return RedirectToAction("DanhSach");
                }
            }
            catch
            {
            }
            return View(model);
        }

        public ActionResult Sua_CTPN(int id)
        {
            var chitietphieunhap = db.ChiTietPhieuNhaps.Find(id);
            return View(chitietphieunhap);
        }
        [HttpPost]
        public ActionResult Sua_CTPN(ChiTietPhieuNhap model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(model);
                }
                var update = db.ChiTietPhieuNhaps.Find(model.ID_ChiTietPhieuNhap);
                update.ID_PhieuNhap = model.ID_PhieuNhap;
                update.ID_SanPham = model.ID_SanPham;
                update.SoLuong = model.SoLuong;
                update.DonGia = model.DonGia;
                var kt = db.SaveChanges();
                if(kt > 0)
                {
                    return RedirectToAction("DanhSach");
                }    
            }
            catch { }
            return View(model);
        }

        public ActionResult Xoa_CTPN(int id)
        {
            var chitietphieunhap = db.ChiTietPhieuNhaps.Find(id);
            db.ChiTietPhieuNhaps.Remove(chitietphieunhap);
            db.SaveChanges();
            return RedirectToAction("DanhSach");
        }

    }
}