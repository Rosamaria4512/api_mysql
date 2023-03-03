import { pool } from "../../db.js";

export const getEmployees = async (req, res) => {
  try {
    // throw new Error('DB Error')
    const [rows] = await pool.query("select * from employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    // console.log(req.params.id);
    const [rows] = await pool.query("select * from employee WHERE id = ?", [
      req.params.id,
    ]);
    //    console.log(rows);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name,salary)values(?,?)",
      [name, salary]
    );
    // console.log(req.body);
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee where id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal",
    });
  }
};

export const putEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",
      [name, salary, id]
    );

    console.log(result);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal",
    });
  }
};
