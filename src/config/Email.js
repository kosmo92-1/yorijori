import React from 'react';

const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
    service: "Naver",
    host: 'smtp.naver.com',
    port: 587,
    auth: {
        user: "always_31@naver.com",
        pass: "pw"
    },
    tls: {
        rejectUnauthorized: false
    }
  });

