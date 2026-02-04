const { instance } = require("../config/razorpay")
const Course = require("../models/Course")
const crypto = require("crypto")
const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const mongoose = require("mongoose")
const {
  courseEnrollmentEmail,
} = require("../mail/templates/courseEnrollmentEmail")
const { paymentSuccessEmail } = require("../mail/templates/paymentSuccessEmail")
const CourseProgress = require("../models/CourseProgress")

// Payment functionality disabled — capturePayment removed.
// Payments disabled for local development. Endpoints return 501 Not Implemented.
exports.capturePayment = async (req, res) => {
  return res.status(501).json({ success: false, message: "Payments are disabled in this environment" })
}

// Payment verification disabled
exports.verifyPayment = async (req, res) => {
  return res.status(501).json({ success: false, message: "Payments are disabled in this environment" })
}

// Sending payment emails disabled
exports.sendPaymentSuccessEmail = async (req, res) => {
  return res.status(501).json({
    success: false,
    message: "Payment email notifications are disabled on this server.",
  })
}

// enrollStudents helper removed as payment-based enrollment is disabled