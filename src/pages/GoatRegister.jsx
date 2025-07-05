
import React, { useState, useEffect } from "react";

export function GoatRegister() {
  const [goats, setGoats] = useState(() => JSON.parse(localStorage.getItem("goats")) || []);
  const [form, setForm] = useState({ id: "", sex: "Male", breed: "Boer", dob: "", status: "Alive", source: "Born", price: "", notes: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => setForm(prev => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGoats = [...goats, form];
    setGoats(updatedGoats);
    localStorage.setItem("goats", JSON.stringify(updatedGoats));
    setForm({ id: "", sex: "Male", breed: "Boer", dob: "", status: "Alive", source: "Born", price: "", notes: "", image: null });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Register a New Goat</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="id" placeholder="Goat ID" value={form.id} onChange={handleChange} className="border p-2 w-full" required />
        <select name="sex" value={form.sex} onChange={handleChange} className="border p-2 w-full">
          <option>Male</option>
          <option>Female</option>
        </select>
        <select name="breed" value={form.breed} onChange={handleChange} className="border p-2 w-full">
          <option>Boer</option>
          <option>Galla</option>
          <option>Toggenburg</option>
        </select>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} className="border p-2 w-full" required />
        <select name="status" value={form.status} onChange={handleChange} className="border p-2 w-full">
          <option>Alive</option>
          <option>Sold</option>
          <option>Dead</option>
        </select>
        <select name="source" value={form.source} onChange={handleChange} className="border p-2 w-full">
          <option>Born</option>
          <option>Bought</option>
        </select>
        <input name="price" placeholder="Purchase Price" value={form.price} onChange={handleChange} className="border p-2 w-full" />
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} className="border p-2 w-full" />
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Add Goat</button>
      </form>

      <h3 className="text-lg font-semibold mt-6">Goat List</h3>
      <table className="w-full mt-2 border">
        <thead>
          <tr>
            <th className="border p-2">Photo</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Sex</th>
            <th className="border p-2">Breed</th>
            <th className="border p-2">DOB</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {goats.map((g, i) => (
            <tr key={i}>
              <td className="border p-2">{g.image && <img src={g.image} alt="" className="w-10 h-10 object-cover" />}</td>
              <td className="border p-2">{g.id}</td>
              <td className="border p-2">{g.sex}</td>
              <td className="border p-2">{g.breed}</td>
              <td className="border p-2">{g.dob}</td>
              <td className="border p-2">{g.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
