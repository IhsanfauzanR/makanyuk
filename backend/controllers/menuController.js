import db from "../config/db.js";

export const getMenu = (req, res) => {
  const q = "SELECT * FROM menu";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
};

export const addMenu = (req, res) => {
  const q = "INSERT INTO menu (nama_menu, deskripsi, harga, kategori_id, admin_id) VALUES (?)";
  const values = [req.body.nama_menu, req.body.deskripsi, req.body.harga, req.body.kategori_id, req.body.admin_id];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json({ message: "Menu berhasil ditambahkan!" });
  });
};
