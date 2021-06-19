const { Model } = require("mongoose");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find();

    if (!docs) return next(new AppError("No documents found", 404));

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: {
        customers: docs,
      },
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ phoneNo: req.params.phoneNo });

    if (!doc)
      return next(new AppError("No document found with that phoneNo", 404));

    res.status(200).json({
      status: "success",
      data: {
        message: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    console.log(req.body);

    const newDoc = await Model.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        doc: newDoc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.findOne({ phoneNo: req.params.phoneNo });

    if (!doc) return next(new AppError("No document found with that ID", 404));
    console.log(req.body);

    doc = await Model.updateOne({ phoneNo: req.params.phoneNo }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        document: doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.findOne({ phoneNo: req.params.phoneNo });

    if (!doc)
      return next(
        new AppError("No document found with that phone number", 404)
      );

    doc = await Model.deleteOne({ phoneNo: req.params.phoneNo });

    res.status(200).json({
      status: "success",
      data: {
        message: "Delete request",
        deleteData: doc,
      },
    });
  });
