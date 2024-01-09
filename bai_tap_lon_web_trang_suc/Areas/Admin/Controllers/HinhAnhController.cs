using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class HinhAnhController : Controller
    {
        web_trang_sucEntities db = new web_trang_sucEntities();
        // GET: Admin/HinhAnh
        public ActionResult DanhSach()
        {
            return View(db.HinhAnhs.ToList());
        }
        [HttpPost]
        public ActionResult DanhSach(int id)
        {
            IEnumerable<HinhAnh> danhSachHinhAnh;
            Session["hinhanh"] = id;
            ViewBag.ID = id;
            if (id == 0) // Nếu chọn "All"
            {
                danhSachHinhAnh = db.HinhAnhs.ToList();
            }
            else
            {
                danhSachHinhAnh = db.HinhAnhs.Where(h => h.ID_SanPham == id).ToList();
            }

            return View(danhSachHinhAnh);
        }


        public ActionResult Them_Anh()
        {
            HinhAnh model = new HinhAnh();
            model.hinhanh1 = "~/Content/images/img.png";
            return View(model);
        }

        [HttpPost]
        public ActionResult Them_Anh(HinhAnh model)
        {
            try
            {
                if (model.ImageUpload != null)
                {
                    string fileName = Path.GetFileNameWithoutExtension(model.ImageUpload.FileName);
                    string extension = Path.GetExtension(model.ImageUpload.FileName);
                    fileName = fileName + extension;
                    model.hinhanh1 = "~/Content/images/" + fileName;
                    model.ImageUpload.SaveAs(Path.Combine(Server.MapPath("~/Content/images/"), fileName));
                }
                db.HinhAnhs.Add(model);
                var kt = db.SaveChanges();
                if (kt > 0)
                {
                    return View(model);
                }
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                Console.WriteLine("loi " + ex.Message);
            }
            return View();
        }

        public ActionResult Xoa_Anh(int id)
        {
            var find_anh = db.HinhAnhs.Find(id);
            db.HinhAnhs.Remove(find_anh);
            var kt = db.SaveChanges();
            if(kt > 0)
            {
                int? id_sanpham = Session["hinhanh"] as int?;
                return RedirectToAction("DanhSach" , new {id = id_sanpham });
            }
            return View();
        }
    }
}