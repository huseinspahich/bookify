import express from "express";

export const handleLogin = async (req, res) => {
    let message = "Submmited";
    res.render("contact.ejs", { message: message });
}

export const handleSort = async (req, res) => {
    const sort = req.body.sort || 'id';
    res.redirect(`/?sort=${sort}`);
  }