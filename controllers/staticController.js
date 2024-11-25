import express from "express";


export const handleABoutPage = async (req, res) => {
        res.render("about.ejs");
};

export const handleContactPage = async (req, res) => {
        res.render("contact.ejs");
};

export const handleBackPage = async (req, res) => {
    res.redirect("/");
};

export const addPage = async (req, res) => {
        res.render("add.ejs",{
            heading: "Add Book",
            submit: "Add New Book"
        });
    };