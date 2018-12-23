# Camphub-LineNotify

[![Known Vulnerabilities](https://snyk.io/test/github/Holfz/CamphubNotify/badge.svg?targetFile=package.json?style=flat-square)](https://snyk.io/test/github/Holfz/CamphubNotify?targetFile=package.json)[![dependencies Status](https://david-dm.org/Holfz/CamphubNotify/status.svg?style=flat-square)](https://david-dm.org/Holfz/CamphubNotify)


## Setup

#### ตั้งค่า Line Notify

1. ไปที่ [LineNotify](https://notify-bot.line.me/th/)
2. เข้าสู่ระบบ
3. ให้คลิ๊กเลือกเมนูด้านขวาบนตรงชื่อ account ของเรา และเลือกที่หน้าของฉัน
4. หลังจากที่คลิ๊กเลือกที่หน้าของฉันแล้ว ให้สังเกตุว่าจะมีปุ่มให้เลือกที่มีคำว่า “ออก Token”
5. ตั้งชื่อ Line Notify ตามที่ต้องการ
6.  การสร้างการแจ้งเตือนเราสามารถเลือกได้ว่าจะส่งข้อมูลให้กับตัวเราเอง หรือเข้าไปยังกลุ่ม หากเลือกส่งให้ตัวเองก็เพียงแค่คลิ๊กที่รูปของเราแล้วกด ออก Token แต่หากต้องการส่งเข้ากลุ่ม สิ่งที่ต้องทำก่อนหรือ Add Line Notify เข้าไปยังกลุ่มที่เราต้องการ
7.  กดออก Token
>กรุณาเก็บ Token ไว้ที่**ตัวเอง**คนเดียวเท่านั้น ห้ามส่งให้คนอื่นอย่างเด็ดขาด.

อ้างอิง [Thinknet](https://engineering.thinknet.co.th/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-line-notify-670f9b20ac27)

#### ตั้งค่า Bot ตรวจสอบ

1. Clone หรือ Download โปรเจคนี้
2. แตกไฟล์หรือไปที่ฟอเดอร์ที่โปรเจคอยู่
3. เปิด Console ขึ้นมา
4. พิม npm install เพื่อลง Dependencies
5. แก้ไขไฟล์ app.js บรรทัดที่ 73 เป็น Token Line Notify ของตัวเอง
6. พิม node app.js เพื่อรันโปรแกรม

## วิธีใช้
```
node app.js
```

## Contributing
ท่านสามารถส่ง Pull requests เข้ามาได้. สำหรับปัญหาในการใช้งาน กรุณาส่ง Issue เข้ามา.

## Todo

 - ทำให้เช็คทุกหมวดโดยทำ Array

## Credit

 - [GamerXP](http://www.gamerxp.in.th/) สำหรับ Jquery Function.
