using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    
    public class LoaiSanPhamController : Controller
    {
        web_trang_sucEntities db = new web_trang_sucEntities();
        // GET: Admin/LoaiSanPham
        public ActionResult DanhSach()
        {
            return View(db.LoaiSanPhams.ToList());
        }

        public ActionResult Them_LoaiSP()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Them_LoaiSP(LoaiSanPham model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(model);
                }
                else
                {
                    db.LoaiSanPhams.Add(model);
                    var kt = db.SaveChanges();
                    if (kt > 0)
                    {
                        return RedirectToAction("DanhSach");
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine("loi " + ex.Message);
            }
            return View(model);
        }

        public ActionResult Sua_LoaiSP(string id)
        {
            var loaisp = db.LoaiSanPhams.Find(id);
            ViewBag.ID_loaiSP = loaisp.ID_loaiSanPham;
            if (loaisp == null)
            {
                return RedirectToAction("DanhSach");
            }
            return View(loaisp);
        }
        [HttpPost]
        public ActionResult Sua_LoaiSP(LoaiSanPham model)
        {
           
            var update = db.LoaiSanPhams.Find(model.ID_loaiSanPham);

            if (update == null)
            {
                return RedirectToAction("DanhSach");
            }
            update.TenloaiSanPham = model.TenloaiSanPham;
            var kt = db.SaveChanges();
            if (kt > 0)
            {
                return RedirectToAction("DanhSach");
            }
            return View(model);
        }

       

    }
}