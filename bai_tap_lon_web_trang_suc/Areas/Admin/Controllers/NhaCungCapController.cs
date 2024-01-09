using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class NhaCungCapController : Controller
    {
        web_trang_sucEntities db = new web_trang_sucEntities();
        // GET: Admin/NhaCungCap
        public ActionResult DanhSach()
        {
            return View(db.NhaCungCaps.ToList());
        }

        public ActionResult Them_NCC()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Them_NCC(NhaCungCap model)
        {
            if (!string.IsNullOrEmpty(model.ID_NhaCungCap))
            {
                ModelState.AddModelError("","ID nhà cung cấp không được để trống");
            }
            if (!string.IsNullOrEmpty(model.TenNhaCungCap))
            {
                ModelState.AddModelError("", "Tên nhà cung cấp không được để trống");
            }
            db.NhaCungCaps.Add(model);
            var kt = db.SaveChanges();
            if(kt > 0)
            {
                return RedirectToAction("DanhSach");
            }    
            return View();
        }

        public ActionResult Sua_NCC(string ID_NhaCungCap)
        {
            var ID = db.NhaCungCaps.Find(ID_NhaCungCap);
            ViewBag.ID_NhaCungCap = ID.ID_NhaCungCap;
            if(ID == null)
            {
                return RedirectToAction("DanhSach");
            }    
           
            return View(ID);
        }
        [HttpPost]
        public ActionResult Sua_NCC(NhaCungCap model)
        {
            if (!string.IsNullOrEmpty(model.TenNhaCungCap))
            {
                ModelState.AddModelError("", "Tên nhà cung cấp không được để trống");
            }
            var update = db.NhaCungCaps.Find(model.ID_NhaCungCap);
           
            if(update == null)
            {
                return RedirectToAction("DanhSach");
            }    
            update.TenNhaCungCap = model.TenNhaCungCap;
            update.SDT = model.SDT;
            update.Email = model.Email;
            var kt = db.SaveChanges();
            if(kt > 0)
            {
                return RedirectToAction("DanhSach");
            }    
               
            return View();
        }
    }
}