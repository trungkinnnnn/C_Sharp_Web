using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using System.IO;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{   
    public class SanPhamController : User_SessionController
    {
        web_trang_sucEntities db = new web_trang_sucEntities();
        // GET: Admin/SanPham
        public ActionResult DanhSach()
        {
            return View(db.SanPhams.ToList());
        }
        [HttpGet]
        public ActionResult DS_PartialView_SP()
        {
            return PartialView("_PartialPage_SP", db.SanPhams.ToList());
        }

        public ActionResult Them_SP()
        {
            SanPham model = new SanPham();
            model.HinhAnh = "~/Content/images/img.png";
            return View(model);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Them_SP(SanPham model)
        {
            try
            {
                if (model.ImageUpload != null)
                {
                    string fileName = Path.GetFileNameWithoutExtension(model.ImageUpload.FileName);
                    string extension = Path.GetExtension(model.ImageUpload.FileName);
                    fileName = fileName + extension;
                    model.HinhAnh = "~/Content/images/" + fileName;
                    model.ImageUpload.SaveAs(Path.Combine(Server.MapPath("~/Content/images/"), fileName));
                }
                model.SoLuong = 0;
                db.SanPhams.Add(model);
                var kt = db.SaveChanges();
                if (kt > 0)
                {
                    
                    HinhAnh hinhAnh = new HinhAnh { ID_SanPham = model.ID_SanPham, hinhanh1 = model.HinhAnh };
                    db.HinhAnhs.Add(hinhAnh);
                    db.SaveChanges();
                    return RedirectToAction("DanhSach");
                }
            }
            catch (Exception ex)
            {
                // Log or handle the exception
            }
            return View(model);
        }
        public ActionResult Sua_SP(int? id)
        {
            var find_id = db.SanPhams.Find(id);
            if(find_id == null)
            {
                return RedirectToAction("DanhSach");
            }    
            if(find_id.HinhAnh == null || find_id.HinhAnh.Length == 0)
            {
                find_id.HinhAnh = "~/Content/images/img.png";
                db.SaveChanges();
            }
            return View(find_id);
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Sua_SP(SanPham model)
        {
            try
            {
                var update = db.SanPhams.Find(model.ID_SanPham);

                if (update == null)
                {
                    return RedirectToAction("DanhSach");
                }
                if (model.ImageUpload != null)
                {
                    string fileName = Path.GetFileNameWithoutExtension(model.ImageUpload.FileName);
                    string extension = Path.GetExtension(model.ImageUpload.FileName);
                    fileName = fileName + extension;
                    model.HinhAnh = "~/Content/images/" + fileName;
                    model.ImageUpload.SaveAs(Path.Combine(Server.MapPath("~/Content/images/"), fileName));
                }
                else
                {
                    model.HinhAnh = update.HinhAnh;
                }
                update.TenSanPham = model.TenSanPham;
                update.ID_LoaiSanPham = model.ID_LoaiSanPham;
                update.MoTa = model.MoTa;
                update.GiaBan = model.GiaBan;
                update.GiamGia = model.GiamGia;
                update.HinhAnh = model.HinhAnh;
                var kt = db.SaveChanges();
                if (kt > 0)
                {
                    
                    return RedirectToAction("DanhSach");
                }
                return View(model);
            }
            catch
            {
                
            }
            return View(model);
        }

        public ActionResult Xoa_SP(int? id)
        {
            var find_id = db.SanPhams.Find(id);
            if (find_id == null)
            {
                return RedirectToAction("DanhSach");
            }
            if (find_id.HinhAnh == null || find_id.HinhAnh.Length == 0)
            {
                find_id.HinhAnh = "~/Content/images/img.png";
            }
            return View(find_id);
        }
        [HttpPost]
        public ActionResult Xoa_SP(SanPham model)
        {
            try
            {
                var find_SP = db.SanPhams.Find(model.ID_SanPham);
                db.SanPhams.Remove(find_SP);
                var kt =  db.SaveChanges();
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

    }
}