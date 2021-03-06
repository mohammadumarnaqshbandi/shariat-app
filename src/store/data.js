// To enter the bayan details copy and paste the format below:
/*
Example:

    {
        name: '---Name here---',
        src: '---Link here---',
        length: '00h 00m ---Length here---',
        size: '---Size here---',
        date: '---Date here---',
        category: '---Category here---'
    },
*/
// Categories: sunday, after juma, before juma, misc, old bayans, miscellaneous
const data = [
    {
    name: "Khud Apna Jaeza Lein",
    src: "http://feeds.soundcloud.com/stream/812124094-shariatinfo-khud-apna-jaeza-lein.mp3",
    length: "16m 15s",
    size: "4.30mb",
    date: "01/05/20",
    category: "ramzan"
  },
   {
     name: "Hame Taqwa Mil Raha Hai Ya Nahin",
     src: "http://feeds.soundcloud.com/stream/812123128-shariatinfo-hame-taqwa-mil-raha-hai-ya-nahin.mp3",
     length: "5m 35s",
     size: "1.40mb",
     date: "30/04/20",
     category: "ramzan"
  },
  {
     name: "Namaz Ke Asarat Zindagi Par",
     src: "https://www.shariat.info/audio/FridayMajlis/Namaz-Ke-Asarat-Zindagi-Par-06-MAR-2020.mp3",
     length: "44m 58s",
     size: "12.80mb",
     date: "06/03/20",
     category: "after juma"
   },
   {
     name: "Allah Ko Pukarne Ki Aadat Bana Lein",
     src: "http://feeds.soundcloud.com/stream/772254766-shariatinfo-allah-ko-pukarne-ki-aadat-bana-lein.mp3",
     length: "28m 26s",
     size: "8.13mb",
     date: "06/03/20",
     category: "before juma"
   },
   {
     name: "Aik Chupa Marz - Hubbe Jah",
     src: "http://feeds.soundcloud.com/stream/772254775-shariatinfo-aik-chupa-marz-hubbe-jah.mp3",
     length: "29m 50s",
     size: "8.53mb",
     date: "28/02/20",
     category: "before juma"
   },
   {
     name: "Eiman Ki Halawat Pane ka Nuskha",
     src: "http://feeds.soundcloud.com/stream/766368925-shariatinfo-eiman-ki-halawat-pane-ka-nuskha.mp3",
     length: "28m 15s",
     size: "8.08mb",
     date: "21/02/20",
     category: "before juma"
  },
  {
     name: "Shaitan Ko Apna Dost Na Banayein",
     src: "https://www.shariat.info/audio/FridayMajlis/Shaitan-Ko-Apna-Dost-Na-Banayein-27-Dec-2019.mp3",
     length: "50m 28s",
     size: "11.05mb",
     date: "27/12/19",
     category: "after juma"
   },
  //  {
  //    name: "Sehat Ki Hifazat",
  //    src: "http://feeds.soundcloud.com/stream/711740152-shariatinfo-sehat-ki-hifazat.mp3",
  //    length: "46m 07s",
  //    size: "13.10mb",
  //    date: "08/11/19",
  //    category: "after juma"
  //  },
   {
     name: "Sachi Talab Manzil Tak Pahunchati Hai",
     src: "http://feeds.soundcloud.com/stream/711739381-shariatinfo-sachi-talab-manzil-tak-pahunchati-hai.mp3",
     length: "29m 52s",
     size: "8.54mb",
     date: "08/11/19",
     category: "before juma"
   },
   {
     name: "Gharelu Zindagi Sawarein",
     src: "https://www.shariat.info/audio/Sunday/Gharelu-Zindagi-Sawarein-03-Nov-2019.mp3",
     length: "1h 48m",
     size: "30.90mb",
     date: "03/11/19",
     category: "sunday"
   },
   {
     name: "Khana Aur Nafs Wa Shaitan Ke Dhoke",
     src: "https://www.shariat.info/audio/FridayMajlis/Khana-Aur-Nafs-Wa-Shaitan-Ke-Dhoke-01-Nov-2019.mp3",
     length: "41m 57s",
     size: "12.00mb",
     date: "01/11/19",
     category: "after juma"
   },
   {
     name: "Rabiul Awwal - Nabi Wali Zindagi Apnayen",
     src: "http://feeds.soundcloud.com/stream/706530328-shariatinfo-rabiul-awwal-nabi-wali-zindagi-apnayen.mp3",
     length: "26m 27s",
     size: "8.14mb",
     date: "01/11/19",
     category: "before juma"
   },
   {
     name: "Eiman Ke Bare Mein Gaflat Se Bachein",
     src: "https://www.shariat.info/audio/FridayMajlis/Eiman-Ke-Bare-Mein-Gaflat-Se-Bachein-25-Oct-2019.mp3",
     length: "55m 17s",
     size: "15.80mb",
     date: "25/10/19",
     category: "after juma"
   },
   {
     name: "Walidain Ki Qadr Karein",
     src: "http://feeds.soundcloud.com/stream/706437052-shariatinfo-walidain-ki-qadr-karein.mp3",
     length: "27m 53s",
     size: "7.97mb",
     date: "25/10/19",
     category: "before juma"
   },
  //  {
  //    name: "Apne Eiman Ke Barein Mein Fikrmand Rahen",
  //    src: "http://feeds.soundcloud.com/stream/706432237-shariatinfo-apne-eiman-ke-barein-mein-fikrmand-rahen.mp3",
  //    length: "56m 22s",
  //    size: "16.10mb",
  //    date: "18/10/19",
  //    category: "after juma"
  //  },
   {
     name: "Shariat Par Chalne Mein 100% Nafa Hi Nafa Hai",
     src: "http://feeds.soundcloud.com/stream/695950097-shariatinfo-eiman-kainaat-ki-sabse-badi-doulat.mp3",
     length: "30m 49s",
     size: "8.80mb",
     date: "18/10/19",
     category: "before juma"
   },
   {
     name: "Shaitan Aur Uske Dhoke",
     src: "https://www.shariat.info/audio/Sunday/Shaitan-Aur-Uske-Dhoke-13-Oct-2019.mp3",
     length: "1h 2m",
     size: "17.90mb",
     date: "13/10/19",
     category: "sunday"
   },
   {
     name: "Shaitan Eiman Ka Lutaira",
     src: "https://www.shariat.info/audio/FridayMajlis/Shaitan-Eiman-Ka-Lutaira-11-Oct-2019.mp3",
     length: "42m 11s",
     size: "12.00mb",
     date: "11/10/19",
     category: "after juma"
   },
   {
     name: "Eiman Kainaat Ki Sabse Badi Doulat",
     src: "http://feeds.soundcloud.com/stream/695950097-shariatinfo-eiman-kainaat-ki-sabse-badi-doulat.mp3",
     length: "27m 54s",
     size: "07.93mb",
     date: "11/10/19",
     category: "before juma"
   },
   {
     name: "Ek Doosre Ki Khobiya Dekhne Ki Aadat Banalein",
     src: "https://www.shariat.info/audio/Sunday/Ek-Doosre-Ki-Khobiya-Dekhne-Ki-Aadat-Banalein-06-Oct-2019.mp3",
     length: "1h 32m",
     size: "11.70mb",
     date: "06/10/19",
     category: "sunday"
   },
   {
     name: "Gussa Ki Tabahi",
     src: "https://www.shariat.info/audio/FridayMajlis/Gussa-Ki-Tabahi-04-Oct-2019.mp3",
     length: "34m 25s",
     size: "04.43mb",
     date: "04/10/19",
     category: "after juma"
   },
   {
     name: "Deendar Kise Kehte Hai",
     src: "http://feeds.soundcloud.com/stream/693049609-shariatinfo-deendar-kise-kehte-hai.mp3",
     length: "27m 23s",
     size: "07.83mb",
     date: "04/10/19",
     category: "before juma"
   },
   {
     name: "Eimawala Kaisa Hota Hai?",
     src: "http://feeds.soundcloud.com/stream/769924060-shariatinfo-eimawala-kaisa-hota-hai.mp3",
     length: "29m 12s",
     size: "03.80mb",
     date: "02/08/19",
     category: "before juma"
   },
  //  {
  //    name: "Eiman Ki Fikr",
  //    src: "http://feeds.soundcloud.com/stream/769919104-shariatinfo-eiman-ki-fikr.mp3",
  //    length: "01h 07m",
  //    size: "08.60mb",
  //    date: "16/06/19",
  //    category: "sunday"
  //  },
   {
     name: "Hamne Zulm Ke Siwa Kiya Hi Kya Hai?",
     src: "https://www.shariat.info/audio/Sunday/Hamne-Zulm-Ke-Siwa-Kiya-Hi-Kya-Hai?-09-June-2019.mp3",
     length: "01h 13m",
     size: "12.60mb",
     date: "09/06/19",
     category: "sunday"
   },
   {
     name: "Hifazate Eiman Ki Fikr",
     src: "http://feeds.soundcloud.com/stream/769923988-shariatinfo-hifazate-eiman-ki-fikr-1.mp3",
     length: "28m 18s",
     size: "03.60mb",
     date: "07/06/19",
     category: "before juma"
   },
   {
     name: "Maqbool Ramazan ki Pehchan: Gunaho Se Sachi Taubah",
     src: "http://feeds.soundcloud.com/stream/769923505-shariatinfo-maqbool-ramazan-ki-pehchan-gunaho-se-sachi-taubah.mp3",
     length: "28m 57s",
     size: "03.70mb",
     date: "31/05/19",
     category: "before juma"
   },
   {
     name: "Nikah Aur Shariat",
     src: "http://feeds.soundcloud.com/stream/769923388-shariatinfo-nikah-aur-shariat.mp3",
     length: "28m 48s",
     size: "03.70mb",
     date: "24/05/19",
     category: "before juma"
   },
   {
     name: "Kya Hamne Muttaqi Banne Ki Bhi Niyyat Ki Hai?",
     src: "http://feeds.soundcloud.com/stream/769923583-shariatinfo-kya-hamne-muttaqi-banne-ki-bhi-niyyat-ki-hai.mp3",
     length: "29m 54s",
     size: "03.80mb",
     date: "17/05/19",
     category: "before juma"
   },
  //  {
  //    name: "Ramazan: Kya Ham Muttaqi Ban Gaye?",
  //    src: "https://cf-media.sndcdn.com/y3cYB1lrMzYB?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20veTNjWUIxbHJNellCIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU1NDAzfX19XX0_&Signature=aEnqC12xpIVlFHVOwkfdRVSNwxIlBuIaveGLwvLseYkBgNYBRwZvKZPHbEkr2PUn5juSBFPV41~vyxgyCxNdxUfY~JdxhX1EoQZ-rlmAypjdkU5xV20-9yY-ARI1fowogUGM5kc6PoRG9D8I6KVQglMjVhNLruQjpHDLzZSkoCJWt6YBCFulboiJoiDpVbrv4saRCL349uXjQ-Izk-FsMw6QI4urDJDE0d5FiSfDm8cXXc7bBisJuSQCjJVvndOS58Xwxaje6QAzFxc2RJg13zNHfGoS9xpiorYSuzB36ITnlF~MKOVAm6rakyWm5vubn27Nx1glw1EJy6VupTC12g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
  //    length: "01h 01m",
  //    size: "07.80mb",
  //    date: "26/05/19",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Rozay Ka Maqsad Taqwa Hasil Karna Hai",
  //    src: "http://feeds.soundcloud.com/stream/769965967-shariatinfo-ramazan-ka-maqsad-taqwa-hasil-karna.mp3",
  //    size: "20.10mb",
  //    date: "-",
  //    category: "ramazan"
  //  },
  //  {
  //    name: "Ramazan Taqwa Hasil Karne Ka Season",
  //    src: "http://feeds.soundcloud.com/stream/769958515-shariatinfo-ramazan-ka-maheena-taqwa-hasil-karne-ka-season.mp3",
  //    length: "02h 32m",
  //    size: "17.40mb",
  //    date: "-",
  //    category: "ramazan"
  //  },
  //  {
  //    name: "Ramazan Ki Tayyari",
  //    src: "http://feeds.soundcloud.com/stream/769965871-shariatinfo-ramazan-ki-tayyari.mp3",
  //    length: "01h 48m",
  //    size: "12.40mb",
  //    date: "-",
  //    category: "ramazan"
  //  },
  //  {
  //    name: "Ramazan Ki Qadar Kis Tarah",
  //    src: "/ramazan-bayans/Ramazaan%20ki%20qadar%20kis%20tarah%20%20.mp3",
  //    length: "12m 54s",
  //    size: "02.20mb",
  //    date: "-",
  //    category: "ramazan"
  //  },
  //  {
  //    name: "Roza Kaisey Banae",
  //    src: "/ramazan-bayans/Roza%20Kaisey%20Banae%2828%20AUG%202009%29.mp3",
  //    length: "18m 48s",
  //    size: "02.70mb",
  //    date: "-",
  //    category: "ramazan"
  //  },
  //  {
  //    name: "Hum Apne Dil Ka Ilaaj Karein Ramazan Sey Pehle",
  //    src: "/ramazan-bayans/RAMZAN%20SAY%20PAHLY%20HAM%20APNY%20DIL%20KA%20ILAAJ%20KARE%281%20JULY%202001%29.mp3",
  //    length: "29m 12s",
  //    size: "06.70mb",
  //    date: "-",
  //    category: "ramazan"
  //  },
   {
     name: "Gharelu Zindagi - Sabr Par Allah Milta Hai",
     src: "https://www.shariat.info/audio/Sunday/Gharelu-Zindagi-Sabr-Par-Allah-Milta-Hai-24-Feb-2019.mp3",
     length: "01h 43m",
     size: "17.80mb",
     date: "24/02/19",
     category: "sunday"
   },
   {
     name: "Diloon Ke Jood Ka Zariya Sirf Aur Sirf Deen Hai",
     src: "https://www.shariat.info/audio/Sunday/Diloon-Ke-Jood-Ka-Zariya-Sirf-Aur-Sirf-Deen-Hai-17-Feb-2019.mp3",
     length: "01h 59m",
     size: "15.20mb",
     date: "17/02/19",
     category: "sunday"
   },
   {
     name: "Dua - Sunday Majlis (17th Feb 2019)",
     src: "https://www.shariat.info/audio/Sunday/Dua-Sunday-Majlis-(17th-Feb-2019).mp3",
     length: "14m 59s",
     size: "01.90mb",
     date: "17/02/19",
     category: "sunday"
   },
   {
     name: "Eiman Ka Jaeza",
     src: "https://www.shariat.info/audio/Sunday/Eiman-Ka-Jaeza-27-Jan-2019.mp3",
     length: "01h 52m",
     size: "16.10mb",
     date: "27/01/19",
     category: "sunday"
   },
   {
     name: "Ba Akhlaq, Muhazzab Insan Banana: Nabiyo Ka Kam",
     src: "https://www.shariat.info/audio/Sunday/Ba-Akhlaq-Muhazzab-Insan-Banana-Nabiyo-Ka-Kam-20-Jan-2019.mp3",
     length: "01h 54m",
     size: "14.70mb",
     date: "20/01/19",
     category: "sunday"
   },
  //  {
  //    name: "Achi Namaz",
  //    src: "http://feeds.soundcloud.com/stream/769518829-shariatinfo-achi-namaz.mp3",
  //    length: "01h 40m",
  //    size: "12.90mb",
  //    date: "23/12/18",
  //    category: "sunday"
  //  },
   {
     name: "Ulema Se Jud Jaye Ilm O Zikr Yani Poocho Aur Amal Karo",
     src: "https://www.shariat.info/audio/Sunday/Ulema-Se-Jud-Jaye-Ilm-O-Zikr-Yani-Poocho-Aur-Amal-Karo-16-Dec-2018.mp3",
     length: "01h 38m",
     size: "12.60mb",
     date: "16/12/18",
     category: "sunday"
   },
   {
     name: "Mukammal Deen Par Amal ki Koshish Kare",
     src: "https://www.shariat.info/audio/Sunday/Mukammal-Deen-Par-Amal-Ki-Koshish-Kare-18-Nov-2018.mp3",
     length: "01h 40m",
     size: "12.90mb",
     date: "18/11/18",
     category: "sunday"
   },
   {
     name: "Pyar Bantne Wale Ban Jae",
     src: "https://www.shariat.info/audio/Sunday/Pyar-Bantne-Wale-Ban-Jae-28-Oct-2018.mp3",
     length: "01h 47m",
     size: "13.90mb",
     date: "28/10/18",
     category: "sunday"
   },
   {
     name: "Gharelu Zindagi",
     src: "https://www.shariat.info/audio/Sunday/Gharelu-Zindagi-21-Oct-2018.mp3",
     length: "01h 38m",
     size: "12.70mb",
     date: "21/10/18",
     category: "sunday"
   },
   {
     name: "Gussa Chood Dein",
     src: "https://www.shariat.info/audio/Sunday/Gussa-Chood-Dein-23-Sep-2018.mp3",
     length: "01h 31m",
     size: "11.70mb",
     date: "23/09/18",
     category: "sunday"
   },
   {
     name: "Hamare Aslaaf Ki Sooch Kya Thi Aur Hamari Kya Hai",
     src: "https://www.shariat.info/audio/Sunday/Hamare-Aslaaf-Ki-Sooch-Kya-Thi-Aur-Hamari-Kya-Hai-16-Sep-2018.mp3",
     length: "01h 37m",
     size: "12.50mb",
     date: "16/09/18",
     category: "sunday"
   },
   {
     name: "Dawat Wa Tableeg Ki Mehnat Ki Aham Batein",
     src: "https://www.shariat.info/audio/Sunday/Dawat-wa-Tableeg-Ki-Mehnat-Ki-Aham-Batein-26-Aug-2018.mp3",
     length: "01h 22m",
     size: "10.60mb",
     date: "26/08/18",
     category: "sunday"
   },
   {
     name: "Ham Deen Ko Haqeeqat Ke Saath Apnaye",
     src: "https://www.shariat.info/audio/Sunday/Hum-Deen-Ko-Haqeeqat-Ke-Saath-Apnaye-19-Aug-2018.mp3",
     length: "01h 09m",
     size: "09.00mb",
     date: "19/08/18",
     category: "sunday"
   },
   {
     name: "Joodo Ka Dard Joode Hi Jante Hai (Gharelu Zindagi)",
     src: "https://www.shariat.info/audio/Sunday/Joodo-Ka-Dard-Joode-Hi-Jante-Hai-(Gharelu Zindagi)-22-July-2018.mp3",
     length: "01h 29m",
     size: "11.50mb",
     date: "22/07/18",
     category: "sunday"
   },
   {
     name: "Haya Aur Eiman Aik Dusre Se Mile Hue Hai",
     src: "https://www.shariat.info/audio/Sunday/Haya-Aur-Eiman-Aik-Dusre-Se-Mile-Hue-Hai-15-July-2018.mp3",
     length: "01h 30m",
     size: "11.70mb",
     date: "15/07/18",
     category: "sunday"
   },
   {
     name: "Kya Hamein Taqwa Mila? Apna Apna Jaeza Lein",
     src: "https://www.shariat.info/audio/Sunday/Kya-Hamein-Taqwa-Mila?-Apna-Apna-Jaeza-Lein-10-June-2018.mp3",
     length: "01h 26m",
     size: "11.10mb",
     date: "10/06/18",
     category: "sunday"
   },
  //  {
  //    name: "Shaitan Ke Zahreele Teer Se Khud Ko Bachaaiye",
  //    src: "http://feeds.soundcloud.com/stream/769404493-shariatinfo-shaitan-ke-zahreele-teer-se-khud-ko-bachaaiye.mp3",
  //    length: "01h 38m",
  //    size: "12.60mb",
  //    date: "03/06/18",
  //    category: "sunday"
  //  },
   {
     name: "Geebat Se Bachein Aur Roze Ki Hifazat Karein",
     src: "https://www.shariat.info/audio/Sunday/Geebat-Se-Bachein-Aur-Roze-Ki-Hifazat-Karein-27-May-2018.mp3",
     length: "01h 20m",
     size: "10.03mb",
     date: "27/05/18",
     category: "sunday"
   },
  //  {
  //    name: "Behayai Se Bachna Aur Ramazan Ki Tayyari",
  //    src: "http://feeds.soundcloud.com/stream/769444120-shariatinfo-behayai-se-bachna-aur-ramazan-ki-tayyari.mp3",
  //    length: "01h 58m",
  //    size: "27.10mb",
  //    date: "29/04/18",
  //    category: "sunday"
  //  },
   {
     name: "Gunah Bimari Hai",
     src: "https://www.shariat.info/audio/Sunday/Gunah-Bimari-Hai-22-Apr-2018.mp3",
     length: "01h 14m",
     size: "24.80mb",
     date: "22/04/18",
     category: "sunday"
   },
   {
     name: "Dawat-o-Tablig Ka Maqsad Apni Islah o Tarbiyat Hai",
     src: "https://www.shariat.info/audio/Sunday/Dawat-o-Tablig-Ka-Maqsad-Apni-Islah-o-Tarbiyat-Hai-25-Mar-2018.mp3",
     length: "01h 14m",
     size: "8.53mb",
     date: "25/03/18",
     category: "sunday"
   },
   {
     name: "Ankho Ki Hifazat",
     src: "https://www.shariat.info/audio/Sunday/Ankho-Ki-Hifazat-25-Feb-2018.mp3",
     length: "1h 05m",
     size: "8.43mb",
     date: "25/02/18",
     category: "sunday"
   },
   {
     name: "Sachi Pakki Taubah Ke Zariye Dil Ki Siyahi Door Kar Lein",
     src: "https://www.shariat.info/audio/Sunday/Sachi-Pakki-Taubah-Ke-Zariye-Dil-Ki-Siyahi-Door-Kar-Lein-28-Jan-2018.mp3",
     length: "1h 22m",
     size: "9.48mb",
     date: "28/01/18",
     category: "sunday"
   },
   {
     name: "Zulm Se Taubah Karein",
     src: "https://www.shariat.info/audio/Sunday/Zulm-Se-Taubah-Karein-21-Jan-2018.mp3",
     length: "1h 05m",
     size: "8.25mb",
     date: "21/01/18",
     category: "sunday"
   },
   {
     name: "Hazrat Moulana Ilyas RH Ki Deeni Dawat - 2",
     src: "https://www.shariat.info/audio/Sunday/Hazrat-Moulana-Ilyas-RH-Ki-Deeni-Dawat-(Part-2)-7-Jan-2018.mp3",
     length: "1h 37m",
     size: "12.50mb",
     date: "07/01/18",
     category: "sunday"
   },
   {
     name: "Hazrat Moulana Ilyas RH Ki Deeni Dawat - 1",
     src: "https://www.shariat.info/audio/Sunday/Hazrat-Moulana-Ilyas-RH-Ki-Deeni-Dawat-(Part-1)-31-Dec-2017.mp3",
     length: "1h 11m",
     size: "9.21mb",
     date: "31/12/17",
     category: "sunday"
   },
  //  {
  //    name: "Zulm Se Bachein",
  //    src: "http://feeds.soundcloud.com/stream/769403974-shariatinfo-zulm-se-bachein-1.mp3",
  //    length: "1h 03s",
  //    size: "4.48mb",
  //    date: "24/12/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Ulema Se Jud Jaye Elm O Zikr Yani Poocho Aur Amal Karo",
  //    src: "http://feeds.soundcloud.com/stream/769345618-shariatinfo-ulema-se-jud-jaye-ilm-o-zikr-yani-poocho-aur-amal-karo.mp3",
  //    length: "1h 16m",
  //    size: "8.69mb",
  //    date: "17/12/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Dawat O Tablig Aur Ilm O Ulema Ki Azmat",
  //    src: "http://feeds.soundcloud.com/stream/769343488-shariatinfo-dawat-o-tablig-aur-ilm-o-ulema-ki-azmat-1.mp3",
  //    length: "1h 18m",
  //    size: "8.97mb",
  //    date: "05/11/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Gussa Chod De Aur Ghar Ke Mahool Ko Khushgawar Banaye",
  //    src: "http://feeds.soundcloud.com/stream/769441234-shariatinfo-gussa-chood-dein.mp3",
  //    length: "1h 22m",
  //    size: "10.64mb",
  //    date: "29/10/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Dawat Ka Maqsood Deen Hai",
  //    src: "http://feeds.soundcloud.com/stream/700169608-shariatinfo-dawat-ka-maqsood-deen-hai.mp3",
  //    length: "1h 21m",
  //    size: "10.46mb",
  //    date: "22/10/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Zaban Ki Hifazat",
  //    src: "http://feeds.soundcloud.com/stream/700169977-shariatinfo-zuban-ki-hifazat.mp3",
  //    length: "1h 07m",
  //    size: "8.63mb",
  //    date: "15/10/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Gunahoo Ki Nahoosat Se Aqal Maar Di Jati Hai",
  //    src: "http://feeds.soundcloud.com/stream/700170259-shariatinfo-gunahoo-ki-nahoosat.mp3",
  //    length: "2h 03m",
  //    size: "14.11mb",
  //    date: "30/08/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Be Hayai Se Bache Aur Ghar Ko Jannat Banaye",
  //    src: "http://feeds.soundcloud.com/stream/700171741-shariatinfo-be-hayai-se-bachein.mp3",
  //    length: "1h 36m",
  //    size: "12.35mb",
  //    date: "23/08/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Ummat Behayai Ke Raste Se Loot Rahi Hai...Ulema-e-Deoband Ki Azmat",
  //    src: "http://feeds.soundcloud.com/stream/700171540-shariatinfo-ummat-behayai-ke-raste-se-loot-rahi-hai.mp3",
  //    length: "1h 18m",
  //    size: "10.08mb",
  //    date: "13/08/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Ulema Ki Be Ehterami Shariat Ki Azmat Na Hone Ki Alamat Hai",
  //    src: "http://feeds.soundcloud.com/stream/700171372-shariatinfo-ulema-ki-be-ehterami-shariat-ki-azmat-na-hone-ki-alamat.mp3",
  //    length: "1h 20m",
  //    size: "10.28mb",
  //    date: "06/08/17",
  //    category: "sunday"
  //  },
//    {
//      name: "Sunday Majlis",
//      src: "/SundayBabaBayan15Ramzan11062017/Sunday_baba-bayan-15-ramzan_11062017.mp3",
//      length: "2h 13m",
//      size: "17.24mb",
//      date: "15/07/17",
//      category: "sunday"
//    },
  //  {
  //    name: "Nikah Mein Allah Ki Bagawat",
  //    src: "http://feeds.soundcloud.com/stream/700171084-shariatinfo-nikah-mein-allah-ki-bagawat.mp3",
  //    length: "1h 25m",
  //    size: "9.82mb",
  //    date: "02/07/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Ramazan Ki Nekiyo Ki Hifazat Kare",
  //    src: "http://feeds.soundcloud.com/stream/700172065-shariatinfo-ramazan-ki-nekiyo-ki-hifazat-kare.mp3",
  //    length: "1h 54m",
  //    size: "14.65mb",
  //    date: "25/06/17",
  //    category: "sunday"
  //  },
  //  {
  //    name: "Ramazan Dil Badalne Ke liye Aaya Hai",
  //    src: "http://feeds.soundcloud.com/stream/700170856-shariatinfo-ramzan-dil-badal-ne-ke-liye-aaya-hai.mp3",
  //    length: "1h 48m",
  //    size: "14.03mb",
  //    date: "18/06/17",
  //    category: "sunday"
  //  },
//    {
//      name: "Sunday Majlis",
//      src: "/SundayBabaBayan15Ramzan11062017/Sunday_baba-bayan-15-ramzan_11062017.mp3",
//      length: "2h 15m",
//      size: "17.44mb",
//      date: "11/06/17",
//      category: "sunday"
//    },
//    {
//      name: "Sunday Majlis",
//      src: "#",
//      length: "2h 07m",
//      size: "7.31mb",
//      date: "04/06/17",
//      category: "sunday"
//    },
//    {
//      name: "Sunday Majlis",
//      src: "/SundayBabaBayan15Ramzan11062017/Sunday_baba-bayan-15-ramzan_11062017.mp3",
//      length: "02h 13m",
//      size: "17.24mb",
//      date: "28/05/17",
//      category: "sunday"
//    },
   {
     name: "Allah Ke Wali Kaise Bane",
     src: "https://www.shariat.info/audio/Sunday/Allah-Ke-Wali-Kaise-Bane-21-May-2017.mp3",
     length: "57m 59s",
     size: "7.48mb",
     date: "21/05/17",
     category: "sunday"
   },
   {
     name: "Maa Baap Ki Dua",
     src: "https://www.shariat.info/audio/Sunday/Maa-Baap-Ki-Dua-14-May-2017.mp3",
     length: "1h 15m",
     size: "9.74mb",
     date: "14/05/17",
     category: "sunday"
   },
//    {
//      name: "Sunday Bayan - 26 Mar 17",
//      src: "https://cf-media.sndcdn.com/BpiWSF8W2fqz?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQnBpV1NGOFcyZnF6IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU3OTAxfX19XX0_&Signature=WKmNWbYr9pTaorMyeOOhDY~zkIJeE49a2droeSNshp3vdl6O3Zz73g6WXtoKnOHa3JGDb0ScSIdX5fS1hJu0MRaOfW8aPu08V7ikaifIJKGdyjGvHA1rdEOlg0ikGjRVzosSI-kDgdeUXkXT~D1j2WhOXQSpNocbVCUBAkGDJnnGiF26VgUe26PgzpIyIq48wUwSzFCSpjjDwM6CuPwf1XPmpJ4T0cAATMAZ5OcbJyPo1VHwMvZPG~EcwzQz~-rXw49fAf6oiPk6yRQyCsoBciXg~ZRoCBCLK-XWk6eqTvWr99xzR9uJwt6UZrTnMJiuE8lDADZCZJN18OZzOaVp8g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
//      length: "1h 27m",
//      size: "11.23mb",
//      date: "26/03/17",
//      category: "sunday"
//    },
//    {
//      name: "Dua After Majlis",
//      src: "/SundayBabaBayan15Ramzan11062017/DuaAfterMajlis-26032017.mp3",
//      length: "26m 05s",
//      size: "3.35mb",
//      date: "26/03/17",
//      category: "sunday"
//    },
//    {
//      name: "Sunday Bayan - 5 Mar 17",
//      src: "https://cf-media.sndcdn.com/z1TiWjcJzHR6?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vejFUaVdqY0p6SFI2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU3NjMwfX19XX0_&Signature=dPEy~mCgPpvdAz5e4-5rDr4gqDkWlrP3wB0ldhCwIUoDooEKbkpDpp2UtjWAS5LlM~JUZgEYfIL49sgaOus99e6jwv0btI1SuMLNIDKp93zTL07YMBRdg06RiT5xxy59smT1yjWnIVqYffbYM-m3hCnmTi88tiRTr1Uf--JNbITWeUgQiT3vO3blbfEQNx6BQMlb4Qdvg3D~x147vd3~IMFjjGWcTwqIFdKt9MaC7UhM9QHO5GwZ3z6wtWg1VtlycRT~5zbfudmuQZHdDCFl3DJwLeom~XwjIYGSbW28rhmgARi1alinloEadIT2QoPWgw2yhccQWd8-0HSNuJxDJw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
//      length: "1h 08m",
//      size: "8.80mb",
//      date: "05/03/17",
//      category: "sunday"
//    },
   {
     name: "Hifazate Eiman Ki Fikr - 2",
     src: "http://feeds.soundcloud.com/stream/769923901-shariatinfo-hifazate-eiman-ki-fikr-2.mp3",
     length: "28m 29s",
     size: "03.70mb",
     date: "12/04/19",
     category: "before juma"
   },
   {
     name: "Hifazate Eiman Ki Fikr - 1",
     src: "http://feeds.soundcloud.com/stream/769923988-shariatinfo-hifazate-eiman-ki-fikr-1.mp3",
     length: "30m 22s",
     size: "03.90mb",
     date: "29/03/19",
     category: "before juma"
   },
   {
     name: "Kahi Hum Sirf Naamke Hi Eiman Wale Toh Nahi Hai??",
     src: "http://feeds.soundcloud.com/stream/769923703-shariatinfo-kahi-hum-sirf-naamke-hi-eiman-wale-toh-nahi-hai.mp3",
     length: "26m 41s",
     size: "03.40mb",
     date: "22/03/19",
     category: "before juma"
   },
   {
     name: "Eiman Ki Fikr Kare",
     src: "http://feeds.soundcloud.com/stream/769919212-shariatinfo-eiman-ki-fikr-karein.mp3",
     length: "28m 48s",
     size: "03.70mb",
     date: "15/03/19",
     category: "before juma"
   },
   {
     name: "Eiman Allah Taala Ki Badi Niamat",
     src: "http://feeds.soundcloud.com/stream/769919767-shariatinfo-eiman-allah-taala-ki-badi-niamat.mp3",
     length: "27m 11s",
     size: "03.50mb",
     date: "08/03/19",
     category: "before juma"
   },
   {
     name: "Jo Chiz Jitni Qeemti Hoti Hai, Uski Utni Hi Hifazat Ki Jati Hai",
     src: "http://feeds.soundcloud.com/stream/769918648-shariatinfo-jo-chiz-jitni-qeemti-hoti-hai-uski-utni-hi-hifazat-ki-jati-hai.mp3",
     length: "28m 44s",
     size: "03.70mb",
     date: "01/03/19",
     category: "before juma"
   },
   {
     name: "Hum Sab Ka AamalNama Tayyar Ho Raha Hai",
     src: "http://feeds.soundcloud.com/stream/769918723-shariatinfo-hum-sab-ka-aamalnama-tayyar-ho-raha-hai.mp3",
     length: "27m 51s",
     size: "03.60mb",
     date: "22/02/19",
     category: "before juma"
   },
   {
     name: "Aakhirat Par Eiman",
     src: "http://feeds.soundcloud.com/stream/769920181-shariatinfo-aakhirat-par-eiman.mp3",
     length: "27m 19s",
     size: "03.50mb",
     date: "15/02/19",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat",
     src: "http://feeds.soundcloud.com/stream/769919416-shariatinfo-eiman-ki-ahmiyat.mp3",
     length: "28m 35s",
     size: "03.70mb",
     date: "25/01/19",
     category: "before juma"
   },
   {
     name: "Eiman Ki Fikr",
     src: "http://feeds.soundcloud.com/stream/769919104-shariatinfo-eiman-ki-fikr.mp3",
     length: "22m 37s",
     size: "02.90mb",
     date: "21/12/18",
     category: "before juma"
   },
   {
     name: "Apne Eiman Ki Fikr Kare",
     src: "http://feeds.soundcloud.com/stream/769919989-shariatinfo-apne-eiman-ki-fikr-kare.mp3",
     length: "30m 03s",
     size: "03.90mb",
     date: "16/11/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Azmat Aur Qeemat",
     src: "http://feeds.soundcloud.com/stream/769919308-shariatinfo-eiman-ki-azmat-aur-qeemat.mp3",
     length: "28m 07s",
     size: "03.60mb",
     date: "09/11/18",
     category: "before juma"
   },
   {
     name: "Eiman Ka Jaeza",
     src: "http://feeds.soundcloud.com/stream/769518946-shariatinfo-eiman-ka-jaeza.mp3",
     length: "27m 03s",
     size: "03.50mb",
     date: "02/11/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Fikr Karein",
     src: "http://feeds.soundcloud.com/stream/769919212-shariatinfo-eiman-ki-fikr-karein.mp3",
     length: "31m 17s",
     size: "04.00mb",
     date: "26/10/18",
     category: "before juma"
   },
   {
     name: "Eiman Kayenaat Ki Sabse Qimti Cheez Hai",
     src: "http://feeds.soundcloud.com/stream/769919515-shariatinfo-eiman-kayenaat-ki-sabse-qimti-cheez-hai.mp3",
     length: "30m 40s",
     size: "03.90mb",
     date: "19/10/18",
     category: "before juma"
   },
   {
     name: "Eiman Wala Shariat Ka Paband Hota Hai - Part-2",
     src: "http://feeds.soundcloud.com/stream/769918951-shariatinfo-eiman-wala-shariat-ka-paband-hota-hai-2.mp3",
     length: "26m 27s",
     size: "03.40mb",
     date: "28/09/18",
     category: "before juma"
   },
   {
     name: "Eiman Wala Shariat Ka Paband Hota Hai",
     src: "http://feeds.soundcloud.com/stream/769918855-shariatinfo-eiman-wala-shariat-ka-paband-hota-hai.mp3",
     length: "27m 40s",
     size: "03.60mb",
     date: "21/09/18",
     category: "before juma"
   },
   {
     name: "Eiman Seekhne Ki Cheez Hai",
     src: "http://feeds.soundcloud.com/stream/769918996-shariatinfo-eiman-seekhne-ki-cheez-hai.mp3",
     length: "28m 04s",
     size: "03.60mb",
     date: "14/09/18",
     category: "before juma"
   },
   {
     name: "Rab Maherbaan Ha",
     src: "http://feeds.soundcloud.com/stream/769906198-shariatinfo-rab-maherbaan-ha.mp3",
     length: "28m 01s",
     size: "03.60mb",
     date: "07/09/18",
     category: "before juma"
   },
   {
     name: "Allah Walo Ki Tamannaye Kya Hoti Hai",
     src: "http://feeds.soundcloud.com/stream/769908112-shariatinfo-allah-walo-ki-tamannaye-kya-hoti-hai.mp3",
     length: "28m 49s",
     size: "03.70mb",
     date: "31/08/18",
     category: "before juma"
   },
   {
     name: "Apne Eiman Ko Bachane Ki Fikr Karein",
     src: "http://feeds.soundcloud.com/stream/769907965-shariatinfo-apne-eiman-ko-bachane-ki-fikr-karein.mp3",
     length: "29m 07s",
     size: "03.70mb",
     date: "20/07/18",
     category: "before juma"
   },
   {
     name: "Eiman Kaainat Ki Sabse Badi Daulat Hai",
     src: "http://feeds.soundcloud.com/stream/769907644-shariatinfo-eiman-kaainat-ki-sabse-badi-daulat-hai.mp3",
     length: "25m 35s",
     size: "03.30mb",
     date: "13/07/18",
     category: "before juma"
   },
   {
     name: "Jamaat Mein Apni Islah Ke Liye Nikalne Ka Matlab",
     src: "http://feeds.soundcloud.com/stream/769906351-shariatinfo-jamaat-mein-apni-islah-ke-liye-nikalne-ka-matlab.mp3",
     length: "28m 35s",
     size: "03.70mb",
     date: "29/06/18",
     category: "before juma"
   },
   {
     name: "Ramazan Ke Baad Bhi Namazo Ka Ehtimam Baqi Rakhe",
     src: "http://feeds.soundcloud.com/stream/769905964-shariatinfo-ramazan-ke-baad-bhi-namazo-ka-ehtimam-baqi-rakhe.mp3",
     length: "26m 41s",
     size: "03.40mb",
     date: "22/06/18",
     category: "before juma"
   },
   {
     name: "Aakhri Ashra: Apna Jaeza Lejiye",
     src: "http://feeds.soundcloud.com/stream/769908292-shariatinfo-aakhri-ashra-apna-jaeza-lejiye.mp3",
     length: "28m 13s",
     size: "03.60mb",
     date: "08/06/18",
     category: "before juma"
   },
   {
     name: "Ramazan Aur Sehhat Ki Hifazat",
     src: "http://feeds.soundcloud.com/stream/769906102-shariatinfo-ramazan-aur-sehhat-ki-hifazat.mp3",
     length: "28m 28s",
     size: "03.70mb",
     date: "01/06/18",
     category: "before juma"
   },
   {
     name: "Gaflat Door Karne Ka Aasan Tariqa",
     src: "http://feeds.soundcloud.com/stream/769906471-shariatinfo-gaflat-door-karne-ka-aasan-tariqa.mp3",
     length: "29m 11s",
     size: "03.80mb",
     date: "25/05/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 8",
     src: "http://feeds.soundcloud.com/stream/769906828-shariatinfo-eiman-ki-ehmiyat-8.mp3",
     length: "29m 38s",
     size: "7.19mb",
     date: "20/04/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 7",
     src: "http://feeds.soundcloud.com/stream/769907029-shariatinfo-eiman-ki-ahmiyat-7.mp3",
     length: "26m 44s",
     size: "3.44mb",
     date: "23/03/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 6",
     src: "http://feeds.soundcloud.com/stream/769907239-shariatinfo-eiman-ki-ahmiyat-6.mp3",
     length: "28m 35s",
     size: "3.70mb",
     date: "16/03/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 5",
     src: "http://feeds.soundcloud.com/stream/769907428-shariatinfo-eiman-ki-ahmiyat-5.mp3",
     length: "29m 52s",
     size: "3.40mb",
     date: "09/03/18",
     category: "before juma"
   },
   {
     name: "Dawat o Tableeg Ke Purano Se Baat - 1",
     src: "http://feeds.soundcloud.com/stream/769907842-shariatinfo-dawat-o-tableeg-ke-purano-se-baat-1.mp3",
     length: "28m 54s",
     size: "3.30mb",
     date: "02/03/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 4",
     src: "http://feeds.soundcloud.com/stream/770606128-shariatinfo-eiman-ki-ahmiyat-4.mp3",
     length: "29m 43s",
     size: "3.82mb",
     date: "23/02/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 3",
     src: "http://feeds.soundcloud.com/stream/770606278-shariatinfo-eiman-ki-ahmiyat-3.mp3",
     length: "28m 30s",
     size: "3.26mb",
     date: "26/01/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 2",
     src: "http://feeds.soundcloud.com/stream/770606353-shariatinfo-eiman-ki-ahmiyat-2.mp3",
     length: "28m 37s",
     size: "3.68mb",
     date: "19/01/18",
     category: "before juma"
   },
   {
     name: "Eiman Ki Ahmiyat - 1",
     src: "http://feeds.soundcloud.com/stream/769919416-shariatinfo-eiman-ki-ahmiyat.mp3",
     length: "26m 34s",
     size: "3.42mb",
     date: "12/01/18",
     category: "before juma"
   },
   {
     name: "Eiman Ke Baare Mein Khauf Emaan Ki Alamat Hai",
     src: "http://feeds.soundcloud.com/stream/769587595-shariatinfo-eiman-ke-baare-mein-khauf-emaan-ki-alamat-hai.mp3",
     length: "28m 09s",
     size: "3.62mb",
     date: "05/01/18",
     category: "before juma"
   },
   {
     name: "Dil Badlega Toh Sab Badlega",
     src: "http://feeds.soundcloud.com/stream/769587739-shariatinfo-dil-badlega-toh-sab-badlega.mp3",
     length: "28m 43s",
     size: "3.90mb",
     date: "29/12/17",
     category: "before juma"
   },
   {
     name: "Shariat Par Amal Karne Par Sab Ki Rahat Hai",
     src: "http://feeds.soundcloud.com/stream/769584958-shariatinfo-shariat-par-amal-karne-par-sab-ki-rahat-hai.mp3",
     length: "28m 15s",
     size: "3.23mb",
     date: "22/12/17",
     category: "before juma"
   },
   {
     name: "Qabooliyat Ki Fikr Kare Aur Rozana Apni Zaat Ka Muhasaba Karein",
     src: "http://feeds.soundcloud.com/stream/769585186-shariatinfo-qabooliyat-ki-fikr-kare-aur-rozana-apni-zaat-ka-muhasaba-karein.mp3",
     length: "28m 44s",
     size: "3.69mb",
     date: "15/12/17",
     category: "before juma"
   },
   {
     name: "Eiman Ki Hifazat Karein",
     src: "http://feeds.soundcloud.com/stream/769587130-shariatinfo-eman-ki-hifazat-karein.mp3",
     length: "30m 20s",
     size: "3.89mb",
     date: "03/11/17",
     category: "before juma"
   },
   {
     name: "Eiman Ki Hifazat",
     src: "http://feeds.soundcloud.com/stream/769587472-shariatinfo-eiman-ki-hifazat.mp3",
     length: "30m 09s",
     size: "3.87mb",
     date: "27/10/17",
     category: "before juma"
   },
//    {
//      name: "Jo Cheez Jitni Qeemti Hoti Hai Uski Utni Hi Hifazat Ki Jati Hai – Part-2",
//      src: "#",
//      length: "m s",
//      size: "mb",
//      date: "20/10/17",
//      category: "before juma"
//    },
   {
     name: "Jo Cheez Jitni Qeemti Hoti Hai Uski Utni Hi Hifazat Ki Jati Hai",
     src: "http://feeds.soundcloud.com/stream/769586095-shariatinfo-jo-cheez-jitni-qeemti-hooti-hai-2.mp3",
     length: "25m 00s",
     size: "3.21mb",
     date: "13/10/17",
     category: "before juma"
   },
   {
     name: "Waqt Ki Qadr Kare...Be Hayai Aur Khayanat Se Bache",
     src: "http://feeds.soundcloud.com/stream/769584673-shariatinfo-waqt-ki-qadr-kare.mp3",
     length: "29m 34s",
     size: "3.79mb",
     date: "18/08/17",
     category: "before juma"
   },
   {
     name: "Fikr e Aakhirat",
     src: "http://feeds.soundcloud.com/stream/769586755-shariatinfo-fikre-aakhirat.mp3",
     length: "28m 34s",
     size: "3.67mb",
     date: "11/08/17",
     category: "before juma"
   },
   {
     name: "Hamare Aamal Badal Jayenge Toh Hakimo Ke Dil Badal Jayenge",
     src: "http://feeds.soundcloud.com/stream/769586422-shariatinfo-hamare-aamal-badal-jayenge.mp3",
     length: "27m 15s",
     size: "3.50mb",
     date: "28/07/17",
     category: "before juma"
   },
   {
     name: "Imaan Be Hayai Ke Raste Se Rukhsat Hota Hai",
     src: "http://feeds.soundcloud.com/stream/769571395-shariatinfo-imaan-be-hayai-ke-raste-se-rukhsat-hota-hai.mp3",
     length: "28m 59s",
     size: "3.79mb",
     date: "21/07/17",
     category: "before juma"
   },
//    {
//      name: "Juma Bayan",
//      src: "majid-juma-ka-bayan_14_07_2017.mp3",
//      length: "27m 46s",
//      size: "3.56mb",
//      date: "14/07/17",
//      category: "before juma"
//    },
//    {
//      name: "Nafa Chahiye Ya Nuqsan - Part-2",
//      src: "#",
//      length: "30m 33s",
//      size: "13.98mb",
//      date: "30/06/17",
//      category: "before juma"
//    },
   {
     name: "Taqwa - 1",
     src: "http://feeds.soundcloud.com/stream/769571029-shariatinfo-taqwa-1.mp3",
     length: "31m 57s",
     size: "5.48mb",
     date: "23/06/17",
     category: "before juma"
   },
   {
     name: "Nafa Chahiye Ya Nuqsan",
     src: "http://feeds.soundcloud.com/stream/769571368-shariatinfo-nafa-chahiye-ya-nuqsan.mp3",
     length: "28m 25s",
     size: "3.25mb",
     date: "16/06/17",
     category: "before juma"
   },
//    {
//      name: "Juma Bayan",
//      src: "BeforeJuma-20170526.mp3",
//      length: "31m 14s",
//      size: "5.36mb",
//      date: "26/05/17",
//      category: "before juma"
//    },
//    {
//      name: "Juma Bayan",
//      src: "Juma-ke-pahle-ka-bayan_19052017.mp3",
//      length: "23m 52s",
//      size: "3.08mb",
//      date: "19/05/17",
//      category: "before juma"
//    },
//    {
//      name: "Juma Bayan",
//      src: "Before_Juma_2017-05-05.mp3",
//      length: "31m 24s",
//      size: "5.39mb",
//      date: "05/05/17",
//      category: "before juma"
//    },
   {
     name: "Huqooq Ki Adaegi Ki Fikr",
     src: "http://feeds.soundcloud.com/stream/769571410-shariatinfo-huqooq-ki-adaegi.mp3",
     length: "24m 00s",
     size: "10.98mb",
     date: "10/03/17",
     category: "before juma"
   },
//    {
//      name: "Juma Bayan",
//      src: "BeforeJuma_3-03-17.mp3",
//      length: "29m 12s",
//      size: "5.01mb",
//      date: "03/03/17",
//      category: "before juma"
//    },
  //  {
  //    name: "Apni Zaat Ki Khidmat Kaise Karen?",
  //    src: "http://feeds.soundcloud.com/stream/769966219-shariatinfo-apni-zaat-ki-khidmat-kaise-karen.mp3",
  //    length: "35m 35s",
  //    size: "4.60mb",
  //    date: "02/08/19",
  //    category: "after juma"
  //  },
   {
     name: "Sehat Ki Hifazat",
     src: "https://www.shariat.info/audio/FridayMajlis/Sehat-Ki-Hifazat-07-June-2019.mp3",
     length: "43m 47s",
     size: "05.60mb",
     date: "07/06/19",
     category: "after juma"
   },
   {
     name: "Nafs o Shaitan Ke Dhoke",
     src: "https://www.shariat.info/audio/FridayMajlis/Nafs-o-Shaitan-Ke-Dhoke-31-May-2019.mp3",
     length: "01h 11m",
     size: "09.20mb",
     date: "31/05/19",
     category: "after juma"
   },
   {
     name: "Ramazan Jismani wa Roohani Sehat Ka Zaria",
     src: "https://www.shariat.info/audio/FridayMajlis/Ramazan-Jismani-wa-Roohani-Sehat-Ka-Zaria-24-May-2019.mp3",
     length: "59m 04s",
     size: "07.60mb",
     date: "24/05/19",
     category: "after juma"
   },
   {
     name: "Ramazan Ka Maqsad: Taqwa Hasil Karna",
     src: "https://www.shariat.info/audio/FridayMajlis/Ramazan-Ka-Maqsad-Taqwa-Hasil-Karna-17-May-2019.mp3",
     length: "33m 04s",
     size: "04.20mb",
     date: "17/05/19",
     category: "after juma"
   },
   {
     name: "Ramazan Ki Tayyari",
     src: "https://www.shariat.info/audio/FridayMajlis/Ramazan-Ki-Tayyari-12-April-2019.mp3",
     length: "01h 08m",
     size: "08.80mb",
     date: "12/04/19",
     category: "after juma"
   },
   {
     name: "Nafs o Shaitan Ke Dhokon Se Bache",
     src: "https://www.shariat.info/audio/FridayMajlis/Nafs-o-Shaitan-Ke-Dhokon-Se-Bache-29-Mar-2019.mp3",
     length: "44m 44s",
     size: "05.70mb",
     date: "29/03/19",
     category: "after juma"
   },
   {
     name: "Kya Hum Bhi Sehat Aur Waqt Ke Bare Mein Dhoke Mein Hai??",
     src: "https://www.shariat.info/audio/FridayMajlis/Kya-Hum-Bhi-Sehat-Aur-Waqt-Ke-Bare-Mein-Dhoke-Mein-Hai-15-Mar-2019.mp3",
     length: "48m 25s",
     size: "06.20mb",
     date: "15/03/19",
     category: "after juma"
   },
  //  {
  //    name: "Sehat Aur Fursat Ke Auqat Ki Qadr Karein",
  //    src: "https://www.shariat.info/audio/FridayMajlis/769958374-shariatinfo-sehat-aur-fursat-ke-auqat-ki-qadr-karein.mp3",
  //    length: "34m 13s",
  //    size: "04.40mb",
  //    date: "08/03/19",
  //    category: "after juma"
  //  },
   {
     name: "Ramazan Ka Maheena Taqwa Hasil Karne Ka Season",
     src: "https://www.shariat.info/audio/FridayMajlis/Ramazan-Ka-Maheena-Taqwa-Hasil-Karne-Ka-Season-01-Mar-2019.mp3",
     length: "01h 26m",
     size: "11.10mb",
     date: "01/03/19",
     category: "after juma"
   },
   {
     name: "Sehat Aur Faragat Do Bunyadi Niamate",
     src: "https://www.shariat.info/audio/FridayMajlis/Sehat-Aur-Faragat-Do-Bunyadi-Niamatein-22-Feb-2019.mp3",
     length: "55m 58s",
     size: "07.20mb",
     date: "22/02/19",
     category: "after juma"
   },
   {
     name: "Ambiya Ke Bhejne Ka Aik Maqsad Tazkiya Bhi Hai",
     src: "https://www.shariat.info/audio/FridayMajlis/Ambiya-Ke-Bhejne-Ka-Aik-Maqsad-Tazkiya-Bhi-Hai-15-Feb-2019.mp3",
     length: "01h 03m",
     size: "10.90mb",
     date: "15/02/19",
     category: "after juma"
   },
   {
     name: "Apne Akhlaq Ko Saawar Lein",
     src: "https://www.shariat.info/audio/FridayMajlis/Apne-Akhlaq-Ko-Saawar-Lein-25-Jan-2019.mp3",
     length: "51m 05m",
     size: "6.60mb",
     date: "25/01/19",
     category: "after juma"
   },
   {
     name: "Namaz Ke Bare Mein Allah Se Daroo",
     src: "https://www.shariat.info/audio/FridayMajlis/Namaz-Ke-Bare-Mein-Allah-Se-Daroo-21-Dec-2018.mp3",
     length: "01h 04m",
     size: "8.30mb",
     date: "21/12/18",
     category: "after juma"
   },
   {
     name: "Hamdardi Aur Khairkhwahi Ko Aadat Bana Le",
     src: "https://www.shariat.info/audio/FridayMajlis/Hamdardi-Aur-Khairkhwahi-Ko-Aadat-Bana-Lein-16-Nov-2018.mp3",
     length: "01h 04m",
     size: "8.20mb",
     date: "16/11/18",
     category: "after juma"
   },
   {
     name: "Ache Akhlaq Ki Ahmiyat",
     src: "https://www.shariat.info/audio/FridayMajlis/Ache-Akhlaq-Ki-Ahmiyat-9-Nov-2018.mp3",
     length: "52m 59s",
     size: "6.80mb",
     date: "09/11/18",
     category: "after juma"
   },
   {
     name: "Apni Achhai Aur Doosro Ki Burai Dekhna Chod De",
     src: "https://www.shariat.info/audio/FridayMajlis/Apni-Achai-Aur-Doosro-Ki-Burai-Dekhna-Chod-De-02-Nov-2018.mp3",
     length: "40m 34s",
     size: "7.00mb",
     date: "02/11/18",
     category: "after juma"
   },
   {
     name: "Achaiya Dekhne Ki Aadat Bana Lein",
     src: "https://www.shariat.info/audio/FridayMajlis/Achaiya-Dekhne-Ki-Aadat-Bana-Lein-26-Oct-2018.mp3",
     length: "51m 52s",
     size: "6.70mb",
     date: "26/10/18",
     category: "after juma"
   },
   {
     name: "Hamare Bade Sab Karke Kehte The Karo",
     src: "https://www.shariat.info/audio/FridayMajlis/Hamare-Bade-Sab-Karke-Kehte-The-Karo-19-Oct-2018.mp3",
     length: "51m 33s",
     size: "6.60mb",
     date: "19/10/18",
     category: "after juma"
   },
   {
     name: "Apni Fikr Mein Ummat Ko Na Bhoole Aur Ummat Ki Fikr Mein Apne Ko Na Bhoole",
     src: "https://www.shariat.info/audio/FridayMajlis/Apni-Fikr-Mein-Ummat-Ko-Na-Bhoole-Aur-Ummat-Ki-Fikr-Mein-Apne-Ko-Na-Bhoole-28-Sep-2018.mp3",
     length: "53m 26s",
     size: "06.90mb",
     date: "28/09/18",
     category: "after juma"
   },
   {
     name: "Nafs O Shaitan Ka Aik Bada Dhoka - Aham Se Nikalkar Gair Aham Mein Laga Dena",
     src: "https://www.shariat.info/audio/FridayMajlis/Nafs-Shaitan-Ka-Ek-Bada-Dhoka-Aham-Se-Nikalkar-Gair-Aham-Mein-Laga-Dena-21-Sep-2018.mp3",
     length: "27m 40s",
     size: "06.70mb",
     date: "21/09/18",
     category: "after juma"
   },
   {
     name: "Kal Hamesha Aaj Ki Shakal Mein Aata Hai",
     src: "https://www.shariat.info/audio/FridayMajlis/Kal-Hamesha-Aaj-Ki-Shakal-Mein-Aata-Hai-14-Sep-2018.mp3",
     length: "61m 50s",
     size: "07.90mb",
     date: "14/09/18",
     category: "after juma"
   },
   {
     name: "Asbab Aur Tawakkul",
     src: "https://www.shariat.info/audio/FridayMajlis/Asbaab-Aur-Tawakkul-07-Sep-2018.mp3",
     length: "44m 16s",
     size: "05.70mb",
     date: "07/09/18",
     category: "after juma"
   },
   {
     name: "Eiman Par Mehnat Aur Uske Nataij",
     src: "https://www.shariat.info/audio/FridayMajlis/Eiman-Par-Mehnat-Aur-Uske-Nataij-31-Aug-2018.mp3",
     length: "38m 10s",
     size: "04.90mb",
     date: "31/08/18",
     category: "after juma"
   },
   {
     name: "Eiman Aur Haya",
     src: "https://www.shariat.info/audio/FridayMajlis/Eiman-Aur-Haya-13-Aug-2018.mp3",
     length: "30m 19s",
     size: "03.90mb",
     date: "13/07/18",
     category: "after juma"
   },
   {
     name: "Eiman Be Hayai Ke Raste Se Chala Jata Hai",
     src: "https://www.shariat.info/audio/FridayMajlis/Eiman-Be-Hayai-Ke-Raste-Se-Chala-Jata-Hai-06-Aug-2018.mp3",
     length: "49m 35s",
     size: "06.40mb",
     date: "06/07/18",
     category: "after juma"
   },
   {
     name: "Ghar Ko Jannat Banane Ka Aasan Tariqa",
     src: "https://www.shariat.info/audio/FridayMajlis/Ghar-Ko-Jannat-Banane-Ka-Aasan-Tariqa-29-June-2018.mp3",
     length: "36m 17s",
     size: "04.70mb",
     date: "29/06/18",
     category: "after juma"
   },
   {
     name: "Niamatein Kyo Cheen Li Jati Hai?",
     src: "https://www.shariat.info/audio/FridayMajlis/Niamatein-Kyo-Cheen-Li-Jati-Hai-22-June-2018.mp3",
     length: "29m 49s",
     size: "03.80mb",
     date: "22/06/18",
     category: "after juma"
   },
   {
     name: "Ramazan Taqwa Ki Kheti Ka Mausam Hai",
     src: "https://www.shariat.info/audio/FridayMajlis/Ramazan-Taqwa-Ki-Kheti-Ka-Mausam-Hai-08-June-2018.mp3",
     length: "53m 11s",
     size: "06.80mb",
     date: "08/06/18",
     category: "after juma"
   },
   {
     name: "Ramazan Mein Nazar Ki Hifazat Karein",
     src: "https://www.shariat.info/audio/FridayMajlis//769941478-shariatinfo-ramazan-mein-nazar-ki-hifazat-karein.mp3",
     length: "01h 08m",
     size: "08.80mb",
     date: "01/06/18",
     category: "after juma"
   },
   {
     name: "Dawat O Tableeg",
     src: "https://www.shariat.info/audio/FridayMajlis/Dawat-o-Tableeg-25-May-2018.mp3",
     length: "01h 27m",
     size: "11.90mb",
     date: "25/05/18",
     category: "after juma"
   },
   {
     name: "Isha Ke Baad Jaldi Sona",
     src: "https://www.shariat.info/audio/FridayMajlis/Isha-Ke-Baad-Jaldi-Sona-20-Apr-2018.mp3",
     length: "28m 00s",
     size: "7.98mb",
     date: "20/04/18",
     category: "after juma"
   },
   {
     name: "Dawat-o-Tablig Ki Mehnat",
     src: "https://www.shariat.info/audio/FridayMajlis/Dawat-o-Tablig-Ki-Mehnat-23-Mar-2018.mp3",
     length: "44m 22s",
     size: "5.71mb",
     date: "23/03/18",
     category: "after juma"
   },
   {
     name: "Hum Se Hai Pyar Kaha; Neend Tumhe Pyari Hai",
     src: "https://www.shariat.info/audio/FridayMajlis/Hum-Se-Hai-Pyar-Kaha-Neend-Tumhe-Pyari-Hai-16-Mar-2018.mp3",
     length: "27m 11s",
     size: "3.50mb",
     date: "16/03/18",
     category: "after juma"
   },
   {
     name: "Mastoorat Khidmat Aur Ghar Ka Kaam",
     src: "https://www.shariat.info/audio/FridayMajlis/Mastoorat-Khidmat-Aur Ghar-Ka-Kaam-9-Mar-2018.mp3",
     length: "47m 15s",
     size: "5.40mb",
     date: "09/03/18",
     category: "after juma"
   },
   {
     name: "Dawat o Tableeg Ke Purano Se Baat - 2",
     src: "https://www.shariat.info/audio/FridayMajlis/Dawat-o-Tableeg-Ke-Purano-Se-Baat-Part-2-02-Mar-2018.mp3",
     length: "49m 18s",
     size: "5.60mb",
     date: "02/03/18",
     category: "after juma"
   },
   {
     name: "Har Rooz Ka Timetable Banae",
     src: "https://www.shariat.info/audio/FridayMajlis/Har-Rooz-Ka-Timetable-Banae-23-Feb-2018.mp3",
     length: "38m 04s",
     size: "4.90mb",
     date: "23/02/18",
     category: "after juma"
   },
   {
     name: "Sunnato Par Amal Bohat Badi Daulat Hai Aur Qeemti Tajurbaat",
     src: "https://www.shariat.info/audio/FridayMajlis/Sunnato-Par-Amal-Bohat-Badi-Daulat-Hai-Aur-Qeemti-Tajurbaat-26-Jan-2018.mp3",
     length: "57m 03m",
     size: "06.52mb",
     date: "26/01/18",
     category: "after juma"
   },
   {
     name: "Apne Dil Ko Sochne Ka Unwan Dein",
     src: "https://www.shariat.info/audio/FridayMajlis/Apne-Dil-Ko-Sochne-Ka-Unwan-Dein-19-Jan-2018.mp3",
     length: "29m 59s",
     size: "03.86mb",
     date: "19/01/18",
     category: "after juma"
   },
   {
     name: "Har Haal Mein Khush Rehne Ka Aasan Nuskha",
     src: "https://www.shariat.info/audio/FridayMajlis/Har-Haal-Mein-Khush-Rehne-Ka-Nuskha-05-Jan-2018.mp3",
     length: "30m 49s",
     size: "03.96mb",
     date: "05/01/18",
     category: "after juma"
   },
   {
     name: "Shariat Par Amal Karne Mein Rahat Hai",
     src: "https://www.shariat.info/audio/FridayMajlis//769584958-shariatinfo-shariat-par-amal-karne-par-sab-ki-rahat-hai.mp3",
     length: "44m 02s",
     size: "05.90mb",
     date: "29/12/17",
     category: "after juma"
   },
   {
     name: "Niamatoon Ke Sath Chain Ho Toh Hi Wo Niamat Hai",
     src: "https://www.shariat.info/audio/FridayMajlis//769934446-shariatinfo-niamatoon-ke-sath-chain-ho-toh-hi-wo-niamat-hai-1.mp3",
     length: "31m 21s",
     size: "3.58mb",
     date: "22/12/17",
     category: "after juma"
   },
   {
     name: "Geebat Jismani Bimariyo Ka Sabab",
     src: "https://www.shariat.info/audio/FridayMajlis//769934842-shariatinfo-geebat-jismani-bimariyo-ka-sabab.mp3",
     length: "34m 55s",
     size: "4.48mb",
     date: "15/12/17",
     category: "after juma"
   },
   {
     name: "Jannat Mein Apna Ghar Book Kara Le",
     src: "https://www.shariat.info/audio/FridayMajlis//770606089-shariatinfo-jannat-mein-apna-ghar-book-kara-le.mp3",
     length: "35m 53s",
     size: "4.46mb",
     date: "03/11/17",
     category: "after juma"
   },
   {
     name: "Maut Ki Yaad",
     src: "https://www.shariat.info/audio/FridayMajlis//769934497-shariatinfo-maut-ki-yaad.mp3",
     length: "36m 46s",
     size: "4.47mb",
     date: "27/10/17",
     category: "after juma"
   },
   {
     name: "Allah Ke Raste Mein Apni Islah Ke Liye Nikalne Ka Matlab",
     src: "https://www.shariat.info/audio/FridayMajlis//769935685-shariatinfo-allah-ke-raste-mein-apni-islah-ke-liye-nikalne-ka-matlab.mp3",
     length: "40m 18s",
     size: "5.17mb",
     date: "20/10/17",
     category: "after juma"
   },
   {
     name: "Doosro Ki Fikr Ke Sath Sath Apni Zaat Ki Bhi Fikr Karen",
     src: "https://www.shariat.info/audio/FridayMajlis//769935409-shariatinfo-doosro-ki-fikr-ke-sath-sath-apni-zaat-ki-bhi-fikr-karen.mp3",
     length: "28m 59s",
     size: "4.14mb",
     date: "13/10/17",
     category: "after juma"
   },
   {
     name: "Gam O Nuqsan Ke Halat Yad Dilana...Nafs Ka Dhoka",
     src: "https://www.shariat.info/audio/FridayMajlis//769934941-shariatinfo-gam-o-nuqsan-ke-halat-yad-dilananafs-ka-dhoka-18-aug-2017.mp3",
     length: "53m 48s",
     size: "6.91mb",
     date: "18/08/17",
     category: "after juma"
   },
//    {
//      name: "Apni Zaat Par Zulm Karke Zalim Na Banein",
//      src: "#",
//      length: "m s",
//      size: "mb",
//      date: "11/08/17",
//      category: "after juma"
//    },
   {
     name: "Gam O Khauf Se Najat Ka Nuskha...Hum Zulm Chod De",
     src: "https://www.shariat.info/audio/FridayMajlis//769935268-shariatinfo-gam-o-khauf-se-najat-ka-nuskha-hum.mp3",
     length: "29m 41s",
     size: "3.81mb",
     date: "04/08/17",
     category: "after juma"
   },
   {
     name: "Apne Sone-Jagne Ka Nizam Shariat Ke Mutabiq Banaye",
     src: "https://www.shariat.info/audio/FridayMajlis//769935532-shariatinfo-apne-sone-jagne-ka-nizam-shariat-ke-mutabiq-banaye.mp3",
     length: "36m 08s",
     size: "4.64mb",
     date: "28/07/17",
     category: "after juma"
   },
   {
     name: "Taubah Sare Masail Ka Hal...Aur Taubah Ki Ibteda Khudse Aur Apne Ghar Se Kare",
     src: "https://www.shariat.info/audio/FridayMajlis//769934293-shariatinfo-taubah-sare-masail-ka-hal-aur-taubah-ki-ibteda-khudse-aur-apne-ghar-se-kare.mp3",
     length: "35m 07s",
     size: "4.51mb",
     date: "21/07/17",
     category: "after juma"
   },
//    {
//      name: "Juma Bayan",
//      src: "/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Juma-Baad-Bayan_14_07_2017.mp3",
//      length: "40m 39s",
//      size: "5.22mb",
//      date: "14/07/17",
//      category: "after juma"
//    },
   {
     name: "Raat Ko Der Se Sona Bohat Kuch Khona Hai",
     src: "https://www.shariat.info/audio/FridayMajlis//769928887-shariatinfo-raat-ko-der-se-sona-bohat-kuch-khona-hai.mp3",
     length: "33m 20s",
     size: "15.26mb",
     date: "30/06/17",
     category: "after juma"
   },
   {
     name: "Taqwa - Part-2",
     src: "https://www.shariat.info/audio/FridayMajlis//769928704-shariatinfo-taqwa-2.mp3",
     length: "31m 37s",
     size: "7.23mb",
     date: "23/06/17",
     category: "after juma"
   },
   {
     name: "Ham Pass Hai Ya Fail",
     src: "https://www.shariat.info/audio/FridayMajlis//769929274-shariatinfo-ham-pass-hai-ya-fail.mp3",
     length: "1h 14m",
     size: "9.58mb",
     date: "16/06/17",
     category: "after juma"
   },
//    {
//      name: "Juma Bayan",
//      src: "/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/AfterJuma-20170526.mp3",
//      length: "33m 25s",
//      size: "5.53mb",
//      date: "26/05/17",
//      category: "after juma"
//    },
   {
     name: "Nifaq Se Bache",
     src: "https://www.shariat.info/audio/FridayMajlis/Nifaaq-Se-Bache-19-May-2017.mp3",
     length: "32m 04s",
     size: "4.13mb",
     date: "19/05/17",
     category: "after juma"
   },
   {
     name: "Niamato Ka Shukar",
     src: "https://www.shariat.info/audio/FridayMajlis//769929172-shariatinfo-niamato-ka-shukar.mp3",
     length: "33m 08s",
     size: "4.27mb",
     date: "12/05/17",
     category: "after juma"
   },
  //  {
  //    name: "Juma Bayan",
  //    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After_Juma_2017-05-05.mp3",
  //    length: "45m 05s",
  //    size: "7.74mb",
  //    date: "05/05/17",
  //    category: "after juma"
  //  },
  //  {
  //    name: "Juma Bayan",
  //    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/after-Juma_24032017.mp3",
  //    length: "33m 38s",
  //    size: "4.32mb",
  //    date: "24/03/17",
  //    category: "after juma"
  //  },
  //  {
  //    name: "Juma Bayan",
  //    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/AfterJuma_3-03-17.mp3",
  //    length: "39m 23s",
  //    size: "5.06mb",
  //    date: "03/03/17",
  //    category: "after juma"
  //  },
  //  {
  //    name: "Juma Bayan",
  //    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Juma-2017-02-24.mp3",
  //    length: "30m 19s",
  //    size: "3.89mb",
  //    date: "24/02/17",
  //    category: "after juma"
  //  },
   {
     name: "Be Pardagi Ka Natija",
     src: "https://www.shariat.info/audio/FridayMajlis//769929475-shariatinfo-be-pardagi-ka-natija.mp3",
     length: "26m 56s",
     size: "3.08mb",
     date: "16/09/11",
     category: "after juma"
   },
   {
     name: "Apno Ki Tarbiyat Ke Mutalliq Aik Aham Baat",
     src: "https://www.shariat.info/audio/FridayMajlis//770002786-shariatinfo-apno-ki-tarbiyat-ke-mutalliq-aik-aham-baat.mp3",
     length: "16m 02s",
     size: "2.80mb",
     date: "10/03/18",
     category: "miscellaneous"
   },
   {
     name: "Hamari Sabse Badi Zaroorat Aur Hamari Sari Pareshaniyo Ka Hal, Taubah",
     src: "http://feeds.soundcloud.com/stream/770002672-shariatinfo-hamari-sabse-badi-zaroorat-aur-hamari-sari-pareshaniyo-ka-hal-taubah.mp3",
     length: "13m 20s",
     size: "1.90mb",
     date: "21/01/18",
     category: "miscellaneous"
   },
   {
     name: "Tarbiyat Ke Ta'alluq Se Bohat Aham Baat",
     src: "http://feeds.soundcloud.com/stream/770002540-shariatinfo-tarbiyat-ke-taalluq-se-bohat-aham-baat.mp3",
     length: "9m 35s",
     size: "7.16mb",
     date: "20/01/18",
     category: "miscellaneous"
   },
   {
     name: "Dawat O Tablig Ki Mehnat Aur 6 Sifaat",
     src: "http://feeds.soundcloud.com/stream/770002780-shariatinfo-dawat-o-tablig-ki-mehnat-aur-6-sifaat.mp3",
     length: "57m 25s",
     size: "6.57mb",
     date: "20/12/17",
     category: "miscellaneous"
   },
   {
     name: "Tablig Ki Mehnat Aur Uska Nehaj",
     src: "http://feeds.soundcloud.com/stream/770002570-shariatinfo-tablig-ki-mehnat-aur-uska-nehaj.mp3",
     length: "1h 24m",
     size: "10.87mb",
     date: "12/12/17",
     category: "miscellaneous"
   },
  //  {
  //    name: "Dua After Bayan",
  //    src: "/HumJamatMayKuNikalteHayJeddah7JUN2012/Dua%2BAfter%2BBayan_12_12_17.mp3",
  //    length: "8m 41s",
  //    size: "1.11mb",
  //    date: "12/12/17",
  //    category: "miscellaneous"
  //  },
  //  {
  //    name: "Dua After Fajr",
  //    src: "/HumJamatMayKuNikalteHayJeddah7JUN2012/Dua%2BAfter%2BFajr_08_12_17.mp3",
  //    length: "23m 46s",
  //    size: "10.88mb",
  //    date: "08/12/17",
  //    category: "miscellaneous"
  //  },
   {
     name: "Dil Kaise Bigadta Hai Aur Kaise Banta Hai?",
     src: "http://feeds.soundcloud.com/stream/770002771-shariatinfo-dil-kaise-bigadta-hai-aur-kaise-banta-hai.mp3",
     length: "14m 40s",
     size: "13.43mb",
     date: "20/08/17",
     category: "miscellaneous"
   },
   {
     name: "Tableeg Kya Hai (Purano Mein Bayan)",
     src: "http://feeds.soundcloud.com/stream/770002585-shariatinfo-tableeg-kya-hai-purano-mein-bayan.mp3",
     length: "1h 05m",
     size: "8.44mb",
     date: "26/07/17",
     category: "miscellaneous"
   },
   {
     name: "Namaaz",
     src: "http://feeds.soundcloud.com/stream/770002624-shariatinfo-namaz.mp3",
     length: "41m 25s",
     size: "5.32mb",
     date: "05/07/17",
     category: "miscellaneous"
   },
   {
     name: "Tableeg Ke Maujooda Halat Me Behtareen Rehnumai",
     src: "http://feeds.soundcloud.com/stream/770002603-shariatinfo-tableeg-ke-maujooda-halat-me-behtareen-rehnumai.mp3",
     length: "1h 09m",
     size: "8.90mb",
     date: "06/07/17",
     category: "miscellaneous"
   },
   {
     name: "Hum Jamat Mein Kyu Nikalte Hai",
     src: "http://feeds.soundcloud.com/stream/770002636-shariatinfo-hum-jamat-mein-kyu-nikalte-hai.mp3",
     length: "39m 52s",
     size: "18.24mb",
     date: "07/06/12",
     category: "miscellaneous"
   },
 ];
 
 export default data;
 
