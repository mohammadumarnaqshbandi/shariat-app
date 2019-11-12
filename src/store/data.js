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
    name: "Sehat Ki Hifazat",
    src: "https://feeds.soundcloud.com/stream/711740152-shariatinfo-sehat-ki-hifazat.mp3",
    length: "46m 07s",
    size: "13.10mb",
    date: "08/11/19",
    category: "after juma"
  },
  {
    name: "Sachi Talab Manzil Tak Pahunchati Hai",
    src: "https://feeds.soundcloud.com/stream/711739381-shariatinfo-sachi-talab-manzil-tak-pahunchati-hai.mp3",
    length: "29m 52s",
    size: "8.54mb",
    date: "08/11/19",
    category: "before juma"
  },
  {
    name: "Gharelu Zindagi Sawarein",
    src: "https://feeds.soundcloud.com/stream/711740827-shariatinfo-gharelu-zindagi-sawarein.mp3",
    length: "1h 48m",
    size: "30.90mb",
    date: "03/11/19",
    category: "sunday"
  },
  {
    name: "Khana Aur Nafs Wa Shaitan Ke Dhoke",
    src: "http://feeds.soundcloud.com/stream/706531393-shariatinfo-khana-aur-nafs-wa-shaitan-ke-dhoke.mp3",
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
    src: "http://feeds.soundcloud.com/stream/706435756-shariatinfo-eiman-ke-barein-mein-gaflat-se-bachein.mp3",
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
  {
    name: "Apne Eiman Ke Barein Mein Fikrmand Rahen",
    src: "http://feeds.soundcloud.com/stream/706432237-shariatinfo-apne-eiman-ke-barein-mein-fikrmand-rahen.mp3",
    length: "56m 22s",
    size: "16.10mb",
    date: "18/10/19",
    category: "after juma"
  },
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
    src: "http://feeds.soundcloud.com/stream/695950817-shariatinfo-shaitan-aur-uske-dhoke.mp3",
    length: "1h 2m",
    size: "17.90mb",
    date: "13/10/19",
    category: "sunday"
  },
  {
    name: "Shaitan Eiman Ka Lutaira",
    src: "http://feeds.soundcloud.com/stream/695949269-shariatinfo-shaitan-eiman-ka-lutaira.mp3",
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
    src: "https://api.soundcloud.com/tracks/693046816/download?client_id=BeGVhOrGmfboy1LtiHTQF6Ejpt9ULJCI",
    length: "1h 32m",
    size: "11.70mb",
    date: "06/10/19",
    category: "sunday"
  },
  {
    name: "Gussa Ki Tabahi",
    src: "https://api.soundcloud.com/tracks/693048619/download?client_id=BeGVhOrGmfboy1LtiHTQF6Ejpt9ULJCI",
    length: "34m 25s",
    size: "04.43mb",
    date: "04/10/19",
    category: "after juma"
  },
  {
    name: "Deendar Kise Kehte Hai",
    src: "https://api.soundcloud.com/tracks/693049609/download?client_id=BeGVhOrGmfboy1LtiHTQF6Ejpt9ULJCI",
    length: "27m 23s",
    size: "07.83mb",
    date: "04/10/19",
    category: "before juma"
  },
  {
    name: "Eimawala Kaisa Hota Hai?",
    src: "https://archive.org/download/FridayBayans/Juma-Bayan_02-08-%2019.mp3",
    length: "29m 12s",
    size: "03.80mb",
    date: "02/08/19",
    category: "before juma"
  },
  {
    name: "Eiman Ki Fikr",
    src: "https://cf-media.sndcdn.com/I0pNgzakox6p?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSTBwTmd6YWtveDZwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjQ5NzU1fX19XX0_&Signature=VJcIhTn7xIwhNN3TUDwD-tJhSwTdR8~eMa-gOs7dO0zdL~YQ4yVZSGIgYNWz8bUdcVVMh6s4dy4pItspuvD2kj3LqrNgJS9Z0AkIdou1N~PpTjQ1pba-ciSsq9E3HqlFjkdvOZk62EMvsMAjS7hPBgV07-mP7z30VY0WpKy1~t6wN8KOh73Hr4FROYyefVCEjy1x0SLU837XK4E6z3DPK9~wNxbZZTBwtp3U9JwEPDjIA8aW0Wyroi0taQEtTeK9C6LZ1jozu6YDjWBOWBJHyPdomkSC~XzF5FYWWyAeLDVihgv7R-5OJCKCfTum-TOSk7K~Jl~T88xELUfM~xCVaQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "01h 07m",
    size: "08.60mb",
    date: "16/06/19",
    category: "sunday"
  },
  {
    name: "Hamne Zulm Ke Siwa Kiya Hi Kya Hai?",
    src: "https://cf-media.sndcdn.com/uGHAXikPAgVV?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdUdIQVhpa1BBZ1ZWIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjUzODIxfX19XX0_&Signature=N2HPWmeXHANyRlcUHFjgVj9CzJids8cX78ZG1vliJDnMd51KrgZa1S9zRQSV3zhWRzjlQWsQWKQtVDwyv6UGXpYTbJbMZJtCqrGm~0QaFEvFnviNB0kaweFtkxN7-9oy9R-as6PeHn3fFgG5uciCkPd1NUr9APde4FDmgiBB0ux93r2FBTyJZfPscy5ML2HMIto9fXsPP5wxmMYuX3Pm57e4M39lgCutthTyMxDGGM7yZ3nZKjVa5xZm10GVNOK7uENxH79m~6UWqTLaGFobwuZEzZIb2y9yuWOEiL7SPWvK-AqphIiEV5ylTUorx2Cpc3Mn-HDjavpzkvDpa59AVg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "01h 13m",
    size: "12.60mb",
    date: "09/06/19",
    category: "sunday"
  },
  {
    name: "Hifazate Eiman Ki Fikr",
    src: "https://archive.org/download/FridayBayans/BABA%20ka%20Juma%20ka%20bayan_7%20june%202019.mp3",
    length: "28m 18s",
    size: "03.60mb",
    date: "07/06/19",
    category: "before juma"
  },
  {
    name: "Maqbool Ramazan ki Pehchan: Gunaho Se Sachi Taubah",
    src: "https://archive.org/download/FridayBayans/Ramzan2019_BABA%20KAJuma%20%20Bayan%20_Taqwa_31_05_2019.mp3",
    length: "28m 57s",
    size: "03.70mb",
    date: "31/05/19",
    category: "before juma"
  },
  {
    name: "Nikah Aur Shariat",
    src: "https://archive.org/download/FridayBayans/Ramzan2019_BABA%20KAJuma%20%20Bayan%20_NIKAAH_24_05_2019.mp3",
    length: "28m 48s",
    size: "03.70mb",
    date: "24/05/19",
    category: "before juma"
  },
  {
    name: "Kya Hamne Muttaqi Banne Ki Bhi Niyyat Ki Hai?",
    src: "https://archive.org/download/FridayBayans/Ramzan2019_BABA%20KAJuma%20%20Bayan%20_Mutaqi_17_05_2019_new.mp3",
    length: "29m 54s",
    size: "03.80mb",
    date: "17/05/19",
    category: "before juma"
  },
  {
    name: "Ramazan: Kya Ham Muttaqi Ban Gaye?",
    src: "https://cf-media.sndcdn.com/y3cYB1lrMzYB?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20veTNjWUIxbHJNellCIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU1NDAzfX19XX0_&Signature=aEnqC12xpIVlFHVOwkfdRVSNwxIlBuIaveGLwvLseYkBgNYBRwZvKZPHbEkr2PUn5juSBFPV41~vyxgyCxNdxUfY~JdxhX1EoQZ-rlmAypjdkU5xV20-9yY-ARI1fowogUGM5kc6PoRG9D8I6KVQglMjVhNLruQjpHDLzZSkoCJWt6YBCFulboiJoiDpVbrv4saRCL349uXjQ-Izk-FsMw6QI4urDJDE0d5FiSfDm8cXXc7bBisJuSQCjJVvndOS58Xwxaje6QAzFxc2RJg13zNHfGoS9xpiorYSuzB36ITnlF~MKOVAm6rakyWm5vubn27Nx1glw1EJy6VupTC12g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "01h 01m",
    size: "07.80mb",
    date: "26/05/19",
    category: "sunday"
  },
  {
    name: "Rozay Ka Maqsad Taqwa Hasil Karna Hai",
    src: "https://archive.org/download/ramazan-bayans/Rozay%20ka%20maqsad%20taqwa%20hasil%20karna%20hai.mp3",
    length: "01h 57m",
    size: "20.10mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Ramazan Taqwa Hasil Karne Ka Season",
    src: "https://archive.org/download/ramazan-bayans/Ramzaan%20taqwa%20hasil%20karnay%20ka%20seezan.mp3",
    length: "02h 32m",
    size: "17.40mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Ramazan Mein Allah Wala Bannay Ki Niyyat Karein",
    src: "https://archive.org/download/ramazan-bayans/Ramdan%20May%20Allah%20Wala%20Bany%20Ki%20Niyyat%20Kare%2828%20SEP%202008%29.mp3",
    length: "01h 55m",
    size: "16.50mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "10 Din Guzargae - Ramazan",
    src: "https://archive.org/download/ramazan-bayans/RAMZAN%20KE%20DAS%20DIN%20GUZAR%20GY%2811%20AUG%202011%29.mp3",
    length: "13m 07s",
    size: "03.00mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Ramazan Ki Tayyari",
    src: "https://archive.org/download/ramazan-bayans/Ramzaan%20ki%20tayyari%20%2005%20JUNE%202016.mp3",
    length: "01h 48m",
    size: "12.40mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Ramazan: A Few Nasihats",
    src: "https://archive.org/download/ramazan-bayans/RAMZAN%20OR%20KUCH%20NASIHATEIN%2821%20AUG%202009%29.mp3",
    length: "11m 33s",
    size: "01.70mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Ramazan Ki Qadar Kis Tarah",
    src: "https://archive.org/download/ramazan-bayans/Ramazaan%20ki%20qadar%20kis%20tarah%20%20.mp3",
    length: "12m 54s",
    size: "02.20mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Roza Kaisey Banae",
    src: "https://archive.org/download/ramazan-bayans/Roza%20Kaisey%20Banae%2828%20AUG%202009%29.mp3",
    length: "18m 48s",
    size: "02.70mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Hum Apne Dil Ka Ilaaj Karein Ramazan Sey Pehle",
    src: "https://archive.org/download/ramazan-bayans/RAMZAN%20SAY%20PAHLY%20HAM%20APNY%20DIL%20KA%20ILAAJ%20KARE%281%20JULY%202001%29.mp3",
    length: "29m 12s",
    size: "06.70mb",
    date: "-",
    category: "ramazan"
  },
  {
    name: "Gharelu Zindagi - Sabr Par Allah Milta Hai",
    src: "https://cf-media.sndcdn.com/W2dpZSYK7dAo?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vVzJkcFpTWUs3ZEFvIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU2MzgwfX19XX0_&Signature=beYMbbNHgcRUZhTdazhBheP5pa-JnTtrc3kkiKVJ2CnxUxy4wSwzNe3hW61gD9MMwiiZ~l~mtQ8bk3eQlDf-mQfiSWYxk98dCPUxpLihQq0MWe38fZNXDTIj5d5McKebYR884XyVJFkr6aaJVB-RdaG8XsFY4lwEwGiwvuMdVu9mexaMyKL3lrpLrnofFudFVLBIZFhHX64IkRe6zhqiZ4-f6rF6eSG2p6YQ1OwXIMhe3cDWeUEP09r0vfzXp24z3YOnlORseer8LOmpj1vwe7QewDdD5OV5NTKX8lvhR3BUtUNDda9yTHgPTYHprUD5YVPPAiQvgaFp0rcGsWuc~g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "01h 43m",
    size: "17.80mb",
    date: "24/02/19",
    category: "sunday"
  },
  {
    name: "Diloon Ke Jood Ka Zariya Sirf Aur Sirf Deen Hai",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BABA%20KA%20SUNDAY%20BAYAN%2017%20FEB%202019.mp3",
    length: "01h 59m",
    size: "15.20mb",
    date: "17/02/19",
    category: "sunday"
  },
  {
    name: "Dua - Sunday Majlis (17th Feb 2019)",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BABA%20KA%20SUNDAY%20KI%20DUA%2017%20FEB%202019.mp3",
    length: "14m 59s",
    size: "01.90mb",
    date: "17/02/19",
    category: "sunday"
  },
  {
    name: "Eiman Ka Jaeza",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BABA%20KA%20sunday%20bayan%2027%20JAN%202019_NEW%20REC.mp3",
    length: "01h 52m",
    size: "16.10mb",
    date: "27/01/19",
    category: "sunday"
  },
  {
    name: "Ba Akhlaq, Muhazzab Insan Banana: Nabiyo Ka Kam",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BABA%20KA%20SUNDAY%20bayan%2020%20JAN%202019.mp3",
    length: "01h 54m",
    size: "14.70mb",
    date: "20/01/19",
    category: "sunday"
  },
  {
    name: "Achi Namaz",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan23Dec18.mp3",
    length: "01h 40m",
    size: "12.90mb",
    date: "23/12/18",
    category: "sunday"
  },
  {
    name: " Ilm o Zikr Yani Har Mauqe Ka Deen Ulema Se Poocho Aur Amal Karo",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan16Dec18.mp3",
    length: "01h 38m",
    size: "12.60mb",
    date: "16/12/18",
    category: "sunday"
  },
  {
    name: "Mukammal Deen Par Amal ki Koshish Kare",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan18Nov2018.mp3",
    length: "01h 40m",
    size: "12.90mb",
    date: "18/11/18",
    category: "sunday"
  },
  {
    name: "Pyar Bantne Wale Ban Jae",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan28Oct18.mp3",
    length: "01h 47m",
    size: "13.90mb",
    date: "28/10/18",
    category: "sunday"
  },
  {
    name: "Gharelu Zindagi",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan21Oct18.mp3",
    length: "01h 38m",
    size: "12.70mb",
    date: "21/10/18",
    category: "sunday"
  },
  {
    name: "Gussa Chood Dein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan23Sep2018_new.mp3",
    length: "01h 31m",
    size: "11.70mb",
    date: "23/09/18",
    category: "sunday"
  },
  {
    name: "Hamare Aslaaf Ki Sooch Kya Thi Aur Hamari Kya Hai",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaBayanSunday16Sep2018.mp3",
    length: "01h 37m",
    size: "12.50mb",
    date: "16/09/18",
    category: "sunday"
  },
  {
    name: "Dawat Wa Tableeg Ki Mehnat Ki Aham Batein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan26Aug2018.mp3",
    length: "01h 22m",
    size: "10.60mb",
    date: "26/08/18",
    category: "sunday"
  },
  {
    name: "Ham Deen Ko Haqeeqat Ke Saath Apnaye",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan19Aug18.mp3",
    length: "01h 09m",
    size: "09.00mb",
    date: "19/08/18",
    category: "sunday"
  },
  {
    name: "Joodo Ka Dard Joode Hi Jante Hai (Gharelu Zindagi)",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKa_SundayBayan22July2018.mp3",
    length: "01h 29m",
    size: "11.50mb",
    date: "22/07/18",
    category: "sunday"
  },
  {
    name: "Haya Aur Eiman Aik Dusre Se Mile Hue Hai",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayKaBayan_15July2018.mp3",
    length: "01h 30m",
    size: "11.70mb",
    date: "15/07/18",
    category: "sunday"
  },
  {
    name: "Kya Hamein Taqwa Mila? Apna Apna Jaeza Lein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKaSundayBayan10June18.mp3",
    length: "01h 26m",
    size: "11.10mb",
    date: "10/06/18",
    category: "sunday"
  },
  {
    name: "Shaitan Ke Zahreele Teer Se Khud Ko Bachaaiye",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BabaKa_SundayBayan3June18.mp3",
    length: "01h 38m",
    size: "12.60mb",
    date: "03/06/18",
    category: "sunday"
  },
  {
    name: "Geebat Se Bachein Aur Roze Ki Hifazat Karein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Baba_SundayBayan27May18.mp3",
    length: "01h 20m",
    size: "10.03mb",
    date: "27/05/18",
    category: "sunday"
  },
  {
    name: "Behayai Se Bachna Aur Ramazan Ki Tayyari",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Behayai-Se-Bachna-Aur-Ramazan-Ki-Tayyari_29-04-18.mp3",
    length: "01h 58m",
    size: "27.10mb",
    date: "29/04/18",
    category: "sunday"
  },
  {
    name: "Gunah Bimari Hai",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Gunah-Bimari_22-04-18.mp3",
    length: "01h 14m",
    size: "24.80mb",
    date: "22/04/18",
    category: "sunday"
  },
  {
    name: "Dawat-o-Tablig Ka Maqsad Apni Islah o Tarbiyat Hai",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Sunday-Majlis_25%2BMar_2018.mp3",
    length: "01h 14m",
    size: "8.53mb",
    date: "25/03/18",
    category: "sunday"
  },
  {
    name: "Ankho Ki Hifazat",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Sunday%2Bbayan%2B25%2BFeb%2B18.mp3",
    length: "1h 05m",
    size: "8.43mb",
    date: "25/02/18",
    category: "sunday"
  },
  {
    name: "Sachi Pakki Taubah Ke Zariye Dil Ki Siyahi Door Kar Lein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/BABA_Sunday%2BBayan%2B28%2Bjan2018.mp3",
    length: "1h 22m",
    size: "9.48mb",
    date: "28/01/18",
    category: "sunday"
  },
  {
    name: "Zulm Se Taubah Karein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/18-sunday-21Jan-2018.mp3",
    length: "1h 05m",
    size: "8.25mb",
    date: "21/01/18",
    category: "sunday"
  },
  {
    name: "Hazrat Moulana Ilyas RH Ki Deeni Dawat - 2",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Hazrat%2BMoulana%2BIlyas%2BRH%2BKi%2BDeeni%2BDawat%2B-%2B2_7_Jan_18.mp3",
    length: "1h 37m",
    size: "12.50mb",
    date: "07/01/18",
    category: "sunday"
  },
  {
    name: "Hazrat Moulana Ilyas RH Ki Deeni Dawat - 1",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Hazrat%2BMoulana%2BIlyas%2BRH%2BKi%2BDeeni%2BDawat%2B-%2B1_31_Jan_18.mp3",
    length: "1h 11m",
    size: "9.21mb",
    date: "31/12/17",
    category: "sunday"
  },
  {
    name: "Zulm Se Bachein",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Zulm%2BSe%2BBachein_24_12_17.mp3",
    length: "1h 03s",
    size: "4.48mb",
    date: "24/12/17",
    category: "sunday"
  },
  {
    name: "Ulema Se Jud Jaye Elm O Zikr Yani Poocho Aur Amal Karo",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Ulema%2BSe%2BJud%2BJaye%2BElm%2BO%2BZikr%2BYani%2BPoocho%2BAur%2BAmal%2BKaro_17_12_17.mp3",
    length: "1h 16m",
    size: "8.69mb",
    date: "17/12/17",
    category: "sunday"
  },
  {
    name: "Dawat O Tablig Aur Ilm O Ulema Ki Azmat",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Dawat%2BO%2BTablig%2BAur%2BIlm%2BO%2BUlema%2BKi%2BAzmat_05_11_17.mp3",
    length: "1h 18m",
    size: "8.97mb",
    date: "05/11/17",
    category: "sunday"
  },
  {
    name: "Gussa Chod De Aur Ghar Ke Mahool Ko Khushgawar Banaye",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Gussa%2BChod%2BDe%2BAur%2BGhar%2BKe%2BMahool%2BKo%2BKhushgawar%2BBanaye_29_11_17.mp3",
    length: "1h 22m",
    size: "10.64mb",
    date: "29/10/17",
    category: "sunday"
  },
  {
    name: "Dawat Ka Maqsood Deen Hai",
    src: "http://feeds.soundcloud.com/stream/700169608-shariatinfo-dawat-ka-maqsood-deen-hai.mp3",
    length: "1h 21m",
    size: "10.46mb",
    date: "22/10/17",
    category: "sunday"
  },
  {
    name: "Zaban Ki Hifazat",
    src: "http://feeds.soundcloud.com/stream/700169977-shariatinfo-zuban-ki-hifazat.mp3",
    length: "1h 07m",
    size: "8.63mb",
    date: "15/10/17",
    category: "sunday"
  },
  {
    name: "Gunahoo Ki Nahoosat Se Aqal Maar Di Jati Hai",
    src: "http://feeds.soundcloud.com/stream/700170259-shariatinfo-gunahoo-ki-nahoosat.mp3",
    length: "2h 03m",
    size: "14.11mb",
    date: "30/08/17",
    category: "sunday"
  },
  {
    name: "Be Hayai Se Bache Aur Ghar Ko Jannat Banaye",
    src: "http://feeds.soundcloud.com/stream/700171741-shariatinfo-be-hayai-se-bachein.mp3",
    length: "1h 36m",
    size: "12.35mb",
    date: "23/08/17",
    category: "sunday"
  },
  {
    name: "Ummat Behayai Ke Raste Se Loot Rahi Hai...Ulema-e-Deoband Ki Azmat",
    src: "http://feeds.soundcloud.com/stream/700171540-shariatinfo-ummat-behayai-ke-raste-se-loot-rahi-hai.mp3",
    length: "1h 18m",
    size: "10.08mb",
    date: "13/08/17",
    category: "sunday"
  },
  {
    name: "Ulema Ki Be Ehterami Shariat Ki Azmat Na Hone Ki Alamat Hai",
    src: "http://feeds.soundcloud.com/stream/700171372-shariatinfo-ulema-ki-be-ehterami-shariat-ki-azmat-na-hone-ki-alamat.mp3",
    length: "1h 20m",
    size: "10.28mb",
    date: "06/08/17",
    category: "sunday"
  },
  {
    name: "Sunday Majlis",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Sunday_baba-bayan-15-ramzan_11062017.mp3",
    length: "2h 13m",
    size: "17.24mb",
    date: "15/07/17",
    category: "sunday"
  },
  {
    name: "Nikah Mein Allah Ki Bagawat",
    src: "http://feeds.soundcloud.com/stream/700171084-shariatinfo-nikah-mein-allah-ki-bagawat.mp3",
    length: "1h 25m",
    size: "9.82mb",
    date: "02/07/17",
    category: "sunday"
  },
  {
    name: "Ramazan Ki Nekiyo Ki Hifazat Kare",
    src: "http://feeds.soundcloud.com/stream/700172065-shariatinfo-ramazan-ki-nekiyo-ki-hifazat-kare.mp3",
    length: "1h 54m",
    size: "14.65mb",
    date: "25/06/17",
    category: "sunday"
  },
  {
    name: "Ramazan Dil Badalne Ke liye Aaya Hai",
    src: "http://feeds.soundcloud.com/stream/700170856-shariatinfo-ramzan-dil-badal-ne-ke-liye-aaya-hai.mp3",
    length: "1h 48m",
    size: "14.03mb",
    date: "18/06/17",
    category: "sunday"
  },
  {
    name: "Sunday Majlis",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Sunday_baba-bayan-15-ramzan_11062017.mp3",
    length: "2h 15m",
    size: "17.44mb",
    date: "11/06/17",
    category: "sunday"
  },
  {
    name: "Sunday Majlis",
    src: "#",
    length: "2h 07m",
    size: "7.31mb",
    date: "04/06/17",
    category: "sunday"
  },
  {
    name: "Sunday Majlis",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/Sunday_baba-bayan-15-ramzan_11062017.mp3",
    length: "02h 13m",
    size: "17.24mb",
    date: "28/05/17",
    category: "sunday"
  },
  {
    name: "Allah Ke Wali Kaise Bane",
    src: "http://feeds.soundcloud.com/stream/700170544-shariatinfo-allah-ke-wali-kaise-bane.mp3",
    length: "57m 59s",
    size: "7.48mb",
    date: "21/05/17",
    category: "sunday"
  },
  {
    name: "Maa Baap Ki Dua",
    src: "https://cf-media.sndcdn.com/Jfsio6KxLZjU?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSmZzaW82S3hMWmpVIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU4MTc5fX19XX0_&Signature=d1cZf-LAQGlwZFx3Fns3IdfPnI0rsreqHTufSEUCFhk9ibWs9D0kbkaZLaXIEa3GH8Lcud6VbC1cJMP5Luscy4jX3wZ2YGz9dpNqXy~1G8thItNY4CHD-GZiFKh5Ruph18HV4~oxp~XogHnupZassbbVbrEwxYfR6x94SpZeet7nL535ARAH~pEhUPuEDF40ddHvGR1-CVeHTlg6EzCWiGnaE6ENCkqCXSPvpRFe3wzrZZI-ilkBuqErlYsrwNnU~PyYA48JYn94J0p8Zb6T5oHdJXF435BOjQGKe9qgBow1aiOBuvyc0-fpLB~8EcnRv8jaqeD5agpKGtGncfB0Cw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "1h 15m",
    size: "9.74mb",
    date: "14/05/17",
    category: "sunday"
  },
  {
    name: "Sunday Bayan - 26 Mar 17",
    src: "https://cf-media.sndcdn.com/BpiWSF8W2fqz?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQnBpV1NGOFcyZnF6IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU3OTAxfX19XX0_&Signature=WKmNWbYr9pTaorMyeOOhDY~zkIJeE49a2droeSNshp3vdl6O3Zz73g6WXtoKnOHa3JGDb0ScSIdX5fS1hJu0MRaOfW8aPu08V7ikaifIJKGdyjGvHA1rdEOlg0ikGjRVzosSI-kDgdeUXkXT~D1j2WhOXQSpNocbVCUBAkGDJnnGiF26VgUe26PgzpIyIq48wUwSzFCSpjjDwM6CuPwf1XPmpJ4T0cAATMAZ5OcbJyPo1VHwMvZPG~EcwzQz~-rXw49fAf6oiPk6yRQyCsoBciXg~ZRoCBCLK-XWk6eqTvWr99xzR9uJwt6UZrTnMJiuE8lDADZCZJN18OZzOaVp8g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "1h 27m",
    size: "11.23mb",
    date: "26/03/17",
    category: "sunday"
  },
  {
    name: "Dua After Majlis",
    src: "https://archive.org/download/SundayBabaBayan15Ramzan11062017/DuaAfterMajlis-26032017.mp3",
    length: "26m 05s",
    size: "3.35mb",
    date: "26/03/17",
    category: "sunday"
  },
  {
    name: "Sunday Bayan - 5 Mar 17",
    src: "https://cf-media.sndcdn.com/z1TiWjcJzHR6?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vejFUaVdqY0p6SFI2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTY3MjU3NjMwfX19XX0_&Signature=dPEy~mCgPpvdAz5e4-5rDr4gqDkWlrP3wB0ldhCwIUoDooEKbkpDpp2UtjWAS5LlM~JUZgEYfIL49sgaOus99e6jwv0btI1SuMLNIDKp93zTL07YMBRdg06RiT5xxy59smT1yjWnIVqYffbYM-m3hCnmTi88tiRTr1Uf--JNbITWeUgQiT3vO3blbfEQNx6BQMlb4Qdvg3D~x147vd3~IMFjjGWcTwqIFdKt9MaC7UhM9QHO5GwZ3z6wtWg1VtlycRT~5zbfudmuQZHdDCFl3DJwLeom~XwjIYGSbW28rhmgARi1alinloEadIT2QoPWgw2yhccQWd8-0HSNuJxDJw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
    length: "1h 08m",
    size: "8.80mb",
    date: "05/03/17",
    category: "sunday"
  },
  {
    name: "Hifazate Eiman Ki Fikr - 2",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20jumaBAYAN%2012%20APR%202019.mp3",
    length: "28m 29s",
    size: "03.70mb",
    date: "12/04/19",
    category: "before juma"
  },
  {
    name: "Hifazate Eiman Ki Fikr - 1",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20jumaBAYAN%2029%20MAR%202019.mp3",
    length: "30m 22s",
    size: "03.90mb",
    date: "29/03/19",
    category: "before juma"
  },
  {
    name: "Kahi Hum Sirf Naamke Hi Eiman Wale Toh Nahi Hai??",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20JUMA%20BAYAN_22%20MAR%202019.mp3",
    length: "26m 41s",
    size: "03.40mb",
    date: "22/03/19",
    category: "before juma"
  },
  {
    name: "Eiman Ki Fikr Kare",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20jumaBAYAN%2015%20MAR%202019.mp3",
    length: "28m 48s",
    size: "03.70mb",
    date: "15/03/19",
    category: "before juma"
  },
  {
    name: "Eiman Allah Taala Ki Badi Niamat",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20jumaBAYAN%208%20MAR%202019.mp3",
    length: "27m 11s",
    size: "03.50mb",
    date: "08/03/19",
    category: "before juma"
  },
  {
    name: "Jo Chiz Jitni Qeemti Hoti Hai, Uski Utni Hi Hifazat Ki Jati Hai",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20JUMA%20BAYAN_1%20MAR%202019.mp3",
    length: "28m 44s",
    size: "03.70mb",
    date: "01/03/19",
    category: "before juma"
  },
  {
    name: "Hum Sab Ka AamalNama Tayyar Ho Raha Hai",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20JUMA%20ME%20BAYAN%2022%20FEB%202019.mp3",
    length: "27m 51s",
    size: "03.60mb",
    date: "22/02/19",
    category: "before juma"
  },
  {
    name: "Aakhirat Par Eiman",
    src: "https://archive.org/download/FridayBayans/BABA%20KA%20JUMA%20BAYAN%20eiman%20aur%20gunah%2015%20FEB%202019.mp3",
    length: "27m 19s",
    size: "03.50mb",
    date: "15/02/19",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat",
    src: "https://archive.org/download/FridayBayans/Baba%20ka%20Juma%20Bayan%20eiman%2025%20JAN%202019.mp3",
    length: "28m 35s",
    size: "03.70mb",
    date: "25/01/19",
    category: "before juma"
  },
  {
    name: "Eiman Ki Fikr",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaBayanEimanKiFikr_21Dec2018.mp3",
    length: "22m 37s",
    size: "02.90mb",
    date: "21/12/18",
    category: "before juma"
  },
  {
    name: "Apne Eiman Ki Fikr Kare",
    src: "https://archive.org/download/FridayBayans/BabaKaBayanBeforJuma_16Nov2018.mp3",
    length: "30m 03s",
    size: "03.90mb",
    date: "16/11/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Azmat Aur Qeemat",
    src: "https://archive.org/download/FridayBayans/BabaKaBeforJumaBayan9Nov18.mp3",
    length: "28m 07s",
    size: "03.60mb",
    date: "09/11/18",
    category: "before juma"
  },
  {
    name: "Eiman Ka Jaeza",
    src: "https://archive.org/download/FridayBayans/BabaKaBayanBeforeJuma2Nov2018.mp3",
    length: "27m 03s",
    size: "03.50mb",
    date: "02/11/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Fikr Karein",
    src: "https://archive.org/download/FridayBayans/BabaKaEimanParBayanBeforeJuma26Oct18.mp3",
    length: "31m 17s",
    size: "04.00mb",
    date: "26/10/18",
    category: "before juma"
  },
  {
    name: "Eiman Kayenaat Ki Sabse Qimti Cheez Hai",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaKaBayan190ct18.mp3",
    length: "30m 40s",
    size: "03.90mb",
    date: "19/10/18",
    category: "before juma"
  },
  {
    name: "Eiman Wala Shariat Ka Paband Hota Hai - Part-2",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaKaBayan_28Sep2018_EimanwalaAazadNahiHota.mp3",
    length: "26m 27s",
    size: "03.40mb",
    date: "28/09/18",
    category: "before juma"
  },
  {
    name: "Eiman Wala Shariat Ka Paband Hota Hai",
    src: "https://archive.org/download/FridayBayans/BabaKajumaMeBayan_ShariatKaPabandBane21Sep2018.mp3",
    length: "27m 40s",
    size: "03.60mb",
    date: "21/09/18",
    category: "before juma"
  },
  {
    name: "Eiman Seekhne Ki Cheez Hai",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaBayan_eimanKaJayza14Sep18.mp3",
    length: "28m 04s",
    size: "03.60mb",
    date: "14/09/18",
    category: "before juma"
  },
  {
    name: "Rab Maherbaan Ha",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaKaBayan7Sep2018.mp3",
    length: "28m 01s",
    size: "03.60mb",
    date: "07/09/18",
    category: "before juma"
  },
  {
    name: "Allah Walo Ki Tamannaye Kya Hoti Hai",
    src: "https://archive.org/download/FridayBayans/BabaKa_jumaBayan31Aug18.mp3",
    length: "28m 49s",
    size: "03.70mb",
    date: "31/08/18",
    category: "before juma"
  },
  {
    name: "Apne Eiman Ko Bachane Ki Fikr Karein",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaMeBayan_EimanHaiYaNahi20july2018.mp3",
    length: "29m 07s",
    size: "03.70mb",
    date: "20/07/18",
    category: "before juma"
  },
  {
    name: "Eiman Kaainat Ki Sabse Badi Daulat Hai",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaBayan_13_07_2018.mp3",
    length: "25m 35s",
    size: "03.30mb",
    date: "13/07/18",
    category: "before juma"
  },
  {
    name: "Jamaat Mein Apni Islah Ke Liye Nikalne Ka Matlab",
    src: "https://archive.org/download/FridayBayans/BabaKaBayan_29-06-2018_beforeJuma.mp3",
    length: "28m 35s",
    size: "03.70mb",
    date: "29/06/18",
    category: "before juma"
  },
  {
    name: "Ramazan Ke Baad Bhi Namazo Ka Ehtimam Baqi Rakhe",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaKaBayan_22June2018.mp3",
    length: "26m 41s",
    size: "03.40mb",
    date: "22/06/18",
    category: "before juma"
  },
  {
    name: "Aakhri Ashra: Apna Jaeza Lejiye",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaBayan8June18.mp3",
    length: "28m 13s",
    size: "03.60mb",
    date: "08/06/18",
    category: "before juma"
  },
  {
    name: "Ramazan Aur Sehhat Ki Hifazat",
    src: "https://archive.org/download/FridayBayans/BabaKaJumaMeBayan_1June2018.mp3",
    length: "28m 28s",
    size: "03.70mb",
    date: "01/06/18",
    category: "before juma"
  },
  {
    name: "Gaflat Door Karne Ka Aasan Tariqa",
    src: "https://archive.org/download/FridayBayans/BabaKa_JumaMeBayan_Ramzan25May18.mp3",
    length: "29m 11s",
    size: "03.80mb",
    date: "25/05/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 8",
    src: "https://archive.org/download/FridayBayans/Eiman-Ki-Ehmiyat-8_20-04-18.mp3",
    length: "29m 38s",
    size: "7.19mb",
    date: "20/04/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 7",
    src: "https://archive.org/download/FridayBayans/Before-Juma_23Mar_2018.mp3",
    length: "26m 44s",
    size: "3.44mb",
    date: "23/03/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 6",
    src: "https://archive.org/download/FridayBayans/Before-Juma_16Mar18.mp3",
    length: "28m 35s",
    size: "3.70mb",
    date: "16/03/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 5",
    src: "https://archive.org/download/FridayBayans/Before-Juma_09Mar18.mp3",
    length: "29m 52s",
    size: "3.40mb",
    date: "09/03/18",
    category: "before juma"
  },
  {
    name: "Dawat o Tableeg Ke Purano Se Baat - 1",
    src: "https://archive.org/download/FridayBayans/Before-Juma_02Mar18.mp3",
    length: "28m 54s",
    size: "3.30mb",
    date: "02/03/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 4",
    src: "",
    length: "29m 43s",
    size: "3.82mb",
    date: "23/02/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 3",
    src: "https://archive.org/download/FridayBayans/26_JAN_2018_Babaka_juma_bayan.mp3",
    length: "28m 30s",
    size: "3.26mb",
    date: "26/01/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 2",
    src: "https://archive.org/download/FridayBayans/Eman_Ki_Ehmiyat_19_Jan_18.mp3",
    length: "28m 37s",
    size: "3.68mb",
    date: "19/01/18",
    category: "before juma"
  },
  {
    name: "Eiman Ki Ahmiyat - 1",
    src: "https://archive.org/download/FridayBayans/EmanKiAhmiyat-1_12_Jan_18.mp3",
    length: "26m 34s",
    size: "3.42mb",
    date: "12/01/18",
    category: "before juma"
  },
  {
    name: "Eiman Ke Baare Mein Khauf Emaan Ki Alamat Hai",
    src: "https://archive.org/download/FridayBayans/EimanKeBaareMeinKhaufEmaanKiAlamatHai_5_Jan_18.mp3",
    length: "28m 09s",
    size: "3.62mb",
    date: "05/01/18",
    category: "before juma"
  },
  {
    name: "Dil Badlega Toh Sab Badlega",
    src: "https://archive.org/download/FridayBayans/DilBadlegaTohSabBadlega_29_12_17.mp3",
    length: "28m 43s",
    size: "3.90mb",
    date: "29/12/17",
    category: "before juma"
  },
  {
    name: "Shariat Par Amal Karne Par Sab Ki Rahat Hai",
    src: "https://archive.org/download/FridayBayans/ShariatParAmalKarneParSabKiRahatHai_22_12_17.mp3",
    length: "28m 15s",
    size: "3.23mb",
    date: "22/12/17",
    category: "before juma"
  },
  {
    name: "Qabooliyat Ki Fikr Kare Aur Rozana Apni Zaat Ka Muhasaba Karein",
    src: "https://archive.org/download/FridayBayans/QabooliyatKiFikrKareAurRozanaApniZaatKaMuhasabaKarein_15_12_17.mp3",
    length: "28m 44s",
    size: "3.69mb",
    date: "15/12/17",
    category: "before juma"
  },
  {
    name: "Eiman Ki Hifazat Karein",
    src: "https://archive.org/download/FridayBayans/EmanKiHifazatKarein_03_11_17.mp3",
    length: "30m 20s",
    size: "3.89mb",
    date: "03/11/17",
    category: "before juma"
  },
  {
    name: "Eiman Ki Hifazat",
    src: "https://archive.org/download/FridayBayans/EimanKiHifazat_27112017.mp3",
    length: "30m 09s",
    size: "3.87mb",
    date: "27/10/17",
    category: "before juma"
  },
  {
    name: "Jo Cheez Jitni Qeemti Hoti Hai Uski Utni Hi Hifazat Ki Jati Hai – Part-2",
    src: "#",
    length: "m s",
    size: "mb",
    date: "20/10/17",
    category: "before juma"
  },
  {
    name: "Jo Cheez Jitni Qeemti Hoti Hai Uski Utni Hi Hifazat Ki Jati Hai",
    src: "https://archive.org/download/FridayBayans/Jo-Cheez-Jitni-Qeemti-Hooti-Hai_13102017.mp3",
    length: "25m 00s",
    size: "3.21mb",
    date: "13/10/17",
    category: "before juma"
  },
  {
    name: "Waqt Ki Qadr Kare...Be Hayai Aur Khayanat Se Bache",
    src: "https://archive.org/download/FridayBayans/WaqtKiQadrKare_18082017.mp3",
    length: "29m 34s",
    size: "3.79mb",
    date: "18/08/17",
    category: "before juma"
  },
  {
    name: "Fikr e Aakhirat",
    src: "https://archive.org/download/FridayBayans/FikreAakhirat_11082017.mp3",
    length: "28m 34s",
    size: "3.67mb",
    date: "11/08/17",
    category: "before juma"
  },
  {
    name: "Imaan Wali Soch Aur Muqaddar Par Imaan",
    src: "#",
    length: "50m 04s",
    size: "5.73mb",
    date: "04/08/17",
    category: "before juma"
  },
  {
    name: "Hamare Aamal Badal Jayenge Toh Hakimo Ke Dil Badal Jayenge",
    src: "https://archive.org/download/FridayBayans/HamareAamalBadalJayenge_280722017.mp3",
    length: "27m 15s",
    size: "3.50mb",
    date: "28/07/17",
    category: "before juma"
  },
  {
    name: "Imaan Be Hayai Ke Raste Se Rukhsat Hota Hai",
    src: "https://archive.org/download/FridayBayans/ImaanBeHayaiKeRasteSeRukhsatHotaHai_21_07_2017.mp3",
    length: "28m 59s",
    size: "3.79mb",
    date: "21/07/17",
    category: "before juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/FridayBayans/majid-juma-ka-bayan_14_07_2017.mp3",
    length: "27m 46s",
    size: "3.56mb",
    date: "14/07/17",
    category: "before juma"
  },
  {
    name: "Nafa Chahiye Ya Nuqsan - Part-2",
    src: "#",
    length: "30m 33s",
    size: "13.98mb",
    date: "30/06/17",
    category: "before juma"
  },
  {
    name: "Taqwa - Part-1",
    src: "https://archive.org/download/FridayBayans/Taqwa-Part-1_23062017.mp3",
    length: "31m 57s",
    size: "5.48mb",
    date: "23/06/17",
    category: "before juma"
  },
  {
    name: "Nafa Chahiye Ya Nuqsan - Part-1",
    src: "https://archive.org/download/FridayBayans/Jun-16-12.58-PM.nafa-chahiye-ya-nuqsan_new01.mp3",
    length: "28m 25s",
    size: "3.25mb",
    date: "16/06/17",
    category: "before juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/FridayBayans/BeforeJuma-20170526.mp3",
    length: "31m 14s",
    size: "5.36mb",
    date: "26/05/17",
    category: "before juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/FridayBayans/Juma-ke-pahle-ka-bayan_19052017.mp3",
    length: "23m 52s",
    size: "3.08mb",
    date: "19/05/17",
    category: "before juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/FridayBayans/Before_Juma_2017-05-05.mp3",
    length: "31m 24s",
    size: "5.39mb",
    date: "05/05/17",
    category: "before juma"
  },
  {
    name: "Huqooq Ki Adaegi Ki Fikr",
    src: "https://archive.org/download/FridayBayans/HuqooqKiAdaegiJuma-20170310.mp3",
    length: "24m 00s",
    size: "10.98mb",
    date: "10/03/17",
    category: "before juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/FridayBayans/BeforeJuma_3-03-17.mp3",
    length: "29m 12s",
    size: "5.01mb",
    date: "03/03/17",
    category: "before juma"
  },
  {
    name: "Apni Zaat Ki Khidmat Kaise Karen?",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After-Juma_2-Aug%20-19.mp3",
    length: "35m 35s",
    size: "4.60mb",
    date: "02/08/19",
    category: "after juma"
  },
  {
    name: "Sehat Ki Hifazat",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20ka%20Juma%20baad%20ka%20bayan_7%20june%202019.mp3",
    length: "43m 47s",
    size: "05.60mb",
    date: "07/06/19",
    category: "after juma"
  },
  {
    name: "Nafs o Shaitan Ke Dhoke",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Ramzan2019_BABA%20KAJuma%20BAAD%20Bayan%20_Ramzan_31_05_2019.mp3",
    length: "01h 11m",
    size: "09.20mb",
    date: "31/05/19",
    category: "after juma"
  },
  {
    name: "Ramazan Jismani wa Roohani Sehat Ka Zaria",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Ramzan2019_BABA%20KAJuma%20BAAD%20Bayan%20_Ramzan_24_05_2019.mp3",
    length: "59m 04s",
    size: "07.60mb",
    date: "24/05/19",
    category: "after juma"
  },
  {
    name: "Ramazan Ka Maqsad: Taqwa Hasil Karna",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Ramzan2019_BABA%20KAJuma%20BAAD%20Bayan%20_Ramzan_17_05_2019.mp3",
    length: "33m 04s",
    size: "04.20mb",
    date: "17/05/19",
    category: "after juma"
  },
  {
    name: "Ramazan Ki Tayyari",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20juma%20baadBAYAN%2012%20APR%202019.mp3",
    length: "01h 08m",
    size: "08.80mb",
    date: "12/04/19",
    category: "after juma"
  },
  {
    name: "Nafs o Shaitan Ke Dhokon Se Bache",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20juma%20baadBAYAN%2029%20MAR%202019.mp3",
    length: "44m 44s",
    size: "05.70mb",
    date: "29/03/19",
    category: "after juma"
  },
  {
    name: "Kya Hum Bhi Sehat Aur Waqt Ke Bare Mein Dhoke Mein Hai??",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20juma%20baadBAYAN%2015%20MAR%202019.mp3",
    length: "48m 25s",
    size: "06.20mb",
    date: "15/03/19",
    category: "after juma"
  },
  {
    name: "Sehat Aur Fursat Ke Auqat Ki Qadr Karein",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20juma%20baadBAYAN%208%20MAR%202019.mp3",
    length: "34m 13s",
    size: "04.40mb",
    date: "08/03/19",
    category: "after juma"
  },
  {
    name: "Ramazan Ka Maheena Taqwa Hasil Karne Ka Season",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20_juma%20baad%20BAYAN%20%201%20MAR%202019.mp3",
    length: "01h 26m",
    size: "11.10mb",
    date: "01/03/19",
    category: "after juma"
  },
  {
    name: "Sehat Aur Faragat Do Bunyadi Niamate",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20JUMA%20BAAD%20BAYAN%2022%20FEB%202019.mp3",
    length: "55m 58s",
    size: "07.20mb",
    date: "22/02/19",
    category: "after juma"
  },
  {
    name: "Ambiya Ke Bhejne Ka Aik Maqsad Tazkiya Bhi Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20juma%20baad%20bayan%2015%20Feb%202019.mp3",
    length: "01h 03m",
    size: "10.90mb",
    date: "15/02/19",
    category: "after juma"
  },
  {
    name: "Apne Akhlaq Ko Saawar Lein",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BABA%20KA%20juma%20baad%20bayan%2025%20JAN%202019.mp3",
    length: "51m 05m",
    size: "6.60mb",
    date: "25/01/19",
    category: "after juma"
  },
  {
    name: "Namaz Ke Bare Mein Allah Se Daroo",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan_21Dec2018.mp3",
    length: "01h 04m",
    size: "8.30mb",
    date: "21/12/18",
    category: "after juma"
  },
  {
    name: "Hamdardi Aur Khairkhwahi Ko Aadat Bana Le",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaBayan_JumaBaad16Nov2018.mp3",
    length: "01h 04m",
    size: "8.20mb",
    date: "16/11/18",
    category: "after juma"
  },
  {
    name: "Ache Akhlaq Ki Ahmiyat",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan9Nov18.mp3",
    length: "52m 59s",
    size: "6.80mb",
    date: "09/11/18",
    category: "after juma"
  },
  {
    name: "Apni Achhai Aur Doosro Ki Burai Dekhna Chod De",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan2Nov18.mp3",
    length: "40m 34s",
    size: "7.00mb",
    date: "02/11/18",
    category: "after juma"
  },
  {
    name: "Achaiya Dekhne Ki Aadat Bana Lein",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaad26Oct18.mp3",
    length: "51m 52s",
    size: "6.70mb",
    date: "26/10/18",
    category: "after juma"
  },
  {
    name: "Hamare Bade Sab Karke Kehte The Karo",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaKeBaadKaBayan19Oct18.mp3",
    length: "51m 33s",
    size: "6.60mb",
    date: "19/10/18",
    category: "after juma"
  },
  {
    name: "Apni Fikr Mein Ummat Ko Na Bhoole Aur Ummat Ki Fikr Mein Apne Ko Na Bhoole",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BababKaJumaBaadBayan28Sep18.mp3",
    length: "53m 26s",
    size: "06.90mb",
    date: "28/09/18",
    category: "after juma"
  },
  {
    name: "Nafs O Shaitan Ka Aik Bada Dhoka - Aham Se Nikalkar Gair Aham Mein Laga Dena",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan_21Sep2018.mp3",
    length: "27m 40s",
    size: "06.70mb",
    date: "21/09/18",
    category: "after juma"
  },
  {
    name: "Kal Hamesha Aaj Ki Shakal Mein Aata Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BbabaKaJumaBaadBayan14Sep18.mp3",
    length: "61m 50s",
    size: "07.90mb",
    date: "14/09/18",
    category: "after juma"
  },
  {
    name: "Asbab Aur Tawakkul",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan7Sep18.mp3",
    length: "44m 16s",
    size: "05.70mb",
    date: "07/09/18",
    category: "after juma"
  },
  {
    name: "Eiman Par Mehnat Aur Uske Nataij",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKa_jumaBaadBayan31aug18.mp3",
    length: "38m 10s",
    size: "04.90mb",
    date: "31/08/18",
    category: "after juma"
  },
  {
    name: "Eiman Aur Haya",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaad_bayan_13_07_2018.mp3",
    length: "30m 19s",
    size: "03.90mb",
    date: "13/07/18",
    category: "after juma"
  },
  {
    name: "Eiman Be Hayai Ke Raste Se Chala Jata Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaBayan_JumaBad6-7-2018.mp3",
    length: "49m 35s",
    size: "06.40mb",
    date: "06/07/18",
    category: "after juma"
  },
  {
    name: "Ghar Ko Jannat Banane Ka Aasan Tariqa",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaBayan_29-06-2018_afterJuma.mp3",
    length: "36m 17s",
    size: "04.70mb",
    date: "29/06/18",
    category: "after juma"
  },
  {
    name: "Niamatein Kyo Cheen Li Jati Hai?",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan22June2018.mp3",
    length: "29m 49s",
    size: "03.80mb",
    date: "22/06/18",
    category: "after juma"
  },
  {
    name: "Ramazan Taqwa Ki Kheti Ka Mausam Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan8June18.mp3",
    length: "53m 11s",
    size: "06.80mb",
    date: "08/06/18",
    category: "after juma"
  },
  {
    name: "Ramazan Mein Nazar Ki Hifazat Karein",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan1June18.mp3",
    length: "01h 08m",
    size: "08.80mb",
    date: "01/06/18",
    category: "after juma"
  },
  {
    name: "Dawat O Tableeg",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/BabaKaJumaBaadBayan_Ramzan25May18.mp3",
    length: "01h 27m",
    size: "11.90mb",
    date: "25/05/18",
    category: "after juma"
  },
  {
    name: "Isha Ke Baad Jaldi Sona",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Jaldi-Sona-After-Juma_20-04-18.mp3",
    length: "28m 00s",
    size: "7.98mb",
    date: "20/04/18",
    category: "after juma"
  },
  {
    name: "Dawat-o-Tablig Ki Mehnat",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After-Juma_23_Mar_2018.mp3",
    length: "44m 22s",
    size: "5.71mb",
    date: "23/03/18",
    category: "after juma"
  },
  {
    name: "Hum Se Hai Pyar Kaha; Neend Tumhe Pyari Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After-Juma_16Mar18.mp3",
    length: "27m 11s",
    size: "3.50mb",
    date: "16/03/18",
    category: "after juma"
  },
  {
    name: "Mastoorat Khidmat Aur Ghar Ka Kaam",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After-Juma_09%2BMar18.mp3",
    length: "47m 15s",
    size: "5.40mb",
    date: "09/03/18",
    category: "after juma"
  },
  {
    name: "Dawat o Tableeg Ke Purano Se Baat - 2",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After-Juma_02%2BMar18.mp3",
    length: "49m 18s",
    size: "5.60mb",
    date: "02/03/18",
    category: "after juma"
  },
  {
    name: "Har Rooz Ka Timetable Banae",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/juma%2Bbaad%2Bbayan%2B_BABA_23%2Bfeb18.mp3",
    length: "38m 04s",
    size: "4.90mb",
    date: "23/02/18",
    category: "after juma"
  },
  {
    name: "Sunnato Par Amal Bohat Badi Daulat Hai Aur Qeemti Tajurbaat",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/26_JAN_2018_juma%2Bbaad_baba%2Bka%2Bbayan.mp3",
    length: "57m 03m",
    size: "06.52mb",
    date: "26/01/18",
    category: "after juma"
  },
  {
    name: "Apne Dil Ko Sochne Ka Unwan Dein",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Apne%2BSone-Jagne%2BKa%2BNizam28072017.mp3",
    length: "29m 59s",
    size: "03.86mb",
    date: "19/01/18",
    category: "after juma"
  },
  {
    name: "Har Haal Mein Khush Rehne Ka Aasan Nuskha",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Har%2BHaal%2BMein%2BKhush%2BRehne%2BKa%2BAasan%2BNuskha_5_Jan_18.mp3",
    length: "30m 49s",
    size: "03.96mb",
    date: "05/01/18",
    category: "after juma"
  },
  {
    name: "Shariat Par Amal Karne Mein Rahat Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Shariat%2BPar%2BAmal%2BKarne%2BMein%2BRahat%2BHai_29_12_17.mp3",
    length: "44m 02s",
    size: "05.90mb",
    date: "29/12/17",
    category: "after juma"
  },
  {
    name: "Niamatoon Ke Sath Chain Ho Toh Hi Wo Niamat Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Niamatoon%2BKe%2BSath%2BChain%2BHo%2BToh%2BHi%2BWo%2BNiamat%2BHai_22_12_17.mp3",
    length: "31m 21s",
    size: "3.58mb",
    date: "22/12/17",
    category: "after juma"
  },
  {
    name: "Geebat Jismani Bimariyo Ka Sabab",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Geebat%2BJismani%2BBimariyo%2BKa%2BSabab_15_12_17.mp3",
    length: "34m 55s",
    size: "4.48mb",
    date: "15/12/17",
    category: "after juma"
  },
  {
    name: "Jannat Mein Apna Ghar Book Kara Le",
    src: 'https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Jannat%2BMein%2BApna%2BGhar%2BBook%2BKara%2BLe_03_11_17.mp3" type="audio/mp3',
    length: "35m 53s",
    size: "4.46mb",
    date: "03/11/17",
    category: "after juma"
  },
  {
    name: "Maut Ki Yaad",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Maut%2BKi%2BYaad_27112017.mp3",
    length: "36m 46s",
    size: "4.47mb",
    date: "27/10/17",
    category: "after juma"
  },
  {
    name: "Allah Ke Raste Mein Apni Islah Ke Liye Nikalne Ka Matlab",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Allah%2BKe%2BRaste%2BMein%2BApni%2BIslah_20112017.mp3",
    length: "40m 18s",
    size: "5.17mb",
    date: "20/10/17",
    category: "after juma"
  },
  {
    name: "Doosro Ki Fikr Ke Sath Sath Apni Zaat Ki Bhi Fikr Karen",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Doosro-Ki-Fikr-Ke-Apni-Zaat-Ki-Bhi-Fikr-Karen_13102017.mp3",
    length: "28m 59s",
    size: "4.14mb",
    date: "13/10/17",
    category: "after juma"
  },
  {
    name: "Gam O Nuqsan Ke Halat Yad Dilana...Nafs Ka Dhoka",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Gam%2BO%2BNuqsan%2BKe%2BHalat_18082017.mp3",
    length: "53m 48s",
    size: "6.91mb",
    date: "18/08/17",
    category: "after juma"
  },
  {
    name: "Apni Zaat Par Zulm Karke Zalim Na Banein",
    src: "#",
    length: "m s",
    size: "mb",
    date: "11/08/17",
    category: "after juma"
  },
  {
    name: "Gam O Khauf Se Najat Ka Nuskha...Hum Zulm Chod De",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Gam%2BO%2BKhauf%2BSe%2BNajat04082017.mp3",
    length: "29m 41s",
    size: "3.81mb",
    date: "04/08/17",
    category: "after juma"
  },
  {
    name: "Apne Sone-Jagne Ka Nizam Shariat Ke Mutabiq Banaye",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Apne%2BSone-Jagne%2BKa%2BNizam28072017.mp3",
    length: "36m 08s",
    size: "4.64mb",
    date: "28/07/17",
    category: "after juma"
  },
  {
    name: "Taubah Sare Masail Ka Hal...Aur Taubah Ki Ibteda Khudse Aur Apne Ghar Se Kare",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Taubah%2BSare%2BMasail%2BKa%2BHal_21_07_2017.mp3",
    length: "35m 07s",
    size: "4.51mb",
    date: "21/07/17",
    category: "after juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Juma-Baad-Bayan_14_07_2017.mp3",
    length: "40m 39s",
    size: "5.22mb",
    date: "14/07/17",
    category: "after juma"
  },
  {
    name: "Raat Ko Der Se Sona Bohat Kuch Khona Hai",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017.mp3",
    length: "33m 20s",
    size: "15.26mb",
    date: "30/06/17",
    category: "after juma"
  },
  {
    name: "Taqwa - Part-2",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Taqwa%2B-%2BPart-2_230617.mp3",
    length: "31m 37s",
    size: "7.23mb",
    date: "23/06/17",
    category: "after juma"
  },
  {
    name: "Ham Pass Hai Ya Fail",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Ramazan-dil-badalne-Ke-liye-aaya-Hai_Juma-Baad_16-june-2017.mp3",
    length: "1h 14m",
    size: "9.58mb",
    date: "16/06/17",
    category: "after juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/AfterJuma-20170526.mp3",
    length: "33m 25s",
    size: "5.53mb",
    date: "26/05/17",
    category: "after juma"
  },
  {
    name: "Nifaaq Se Bachein",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Nifaq-se-bache_Juma-19052017.mp3",
    length: "32m 04s",
    size: "4.13mb",
    date: "19/05/17",
    category: "after juma"
  },
  {
    name: "Niamatoo Ka Shukar",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/NIAMATO-KA-SHUKAR-JUMA-BAD-May-12.mp3",
    length: "33m 08s",
    size: "4.27mb",
    date: "12/05/17",
    category: "after juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/After_Juma_2017-05-05.mp3",
    length: "45m 05s",
    size: "7.74mb",
    date: "05/05/17",
    category: "after juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/after-Juma_24032017.mp3",
    length: "33m 38s",
    size: "4.32mb",
    date: "24/03/17",
    category: "after juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/AfterJuma_3-03-17.mp3",
    length: "39m 23s",
    size: "5.06mb",
    date: "03/03/17",
    category: "after juma"
  },
  {
    name: "Juma Bayan",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/Juma-2017-02-24.mp3",
    length: "30m 19s",
    size: "3.89mb",
    date: "24/02/17",
    category: "after juma"
  },
  {
    name: "Be Pardagi Ka Natijah",
    src: "https://archive.org/download/raat-ko-der-me-sona-bahut-kuch-khona-hai_30062017/2011-09-16BePardagiKaNatija.mp3",
    length: "26m 56s",
    size: "3.08mb",
    date: "16/09/11",
    category: "after juma"
  },
  {
    name: "Apno Ki Tarbiyat Ke Mutalliq Aik Aham Baat",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Misc_10%2BMar18.mp3",
    length: "16m 02s",
    size: "2.80mb",
    date: "10/03/18",
    category: "miscellaneous"
  },
  {
    name: "Hamari Sabse Badi Zaroorat Aur Hamari Sari Pareshaniyo Ka Hal, Taubah",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Laut%2Baao_Taubah%2B21january2018.mp3",
    length: "13m 20s",
    size: "1.90mb",
    date: "21/01/18",
    category: "miscellaneous"
  },
  {
    name: "Tarbiyat Ke Ta'alluq Se Bohat Aham Baat",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/aham-bat-tarbiyat-ke-talluq-se.mp3",
    length: "9m 35s",
    size: "7.16mb",
    date: "20/01/18",
    category: "miscellaneous"
  },
  {
    name: "Dawat O Tablig Ki Mehnat Aur 6 Sifaat",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Dawat%2BO%2BTablig%2BKi%2BMehnat%2BAur%2B6%2BSifaat_20_12_17.mp3",
    length: "57m 25s",
    size: "6.57mb",
    date: "20/12/17",
    category: "miscellaneous"
  },
  {
    name: "Tablig Ki Mehnat Aur Uska Nehaj",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Tablig%2BKi%2BMehnat%2BAur%2BUska%2BNehaj_12_12_17.mp3",
    length: "1h 24m",
    size: "10.87mb",
    date: "12/12/17",
    category: "miscellaneous"
  },
  {
    name: "Dua After Bayan",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Dua%2BAfter%2BBayan_12_12_17.mp3",
    length: "8m 41s",
    size: "1.11mb",
    date: "12/12/17",
    category: "miscellaneous"
  },
  {
    name: "Dua After Fajr",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Dua%2BAfter%2BFajr_08_12_17.mp3",
    length: "23m 46s",
    size: "10.88mb",
    date: "08/12/17",
    category: "miscellaneous"
  },
  {
    name: "Dil Kaise Bigadta Hai Aur Kaise Banta Hai?",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Dil%2BKaise%2BBigadta%2BHai_20082017.mp3",
    length: "14m 40s",
    size: "13.43mb",
    date: "20/08/17",
    category: "miscellaneous"
  },
  {
    name: "Tableeg Kya Hai (Purano Mein Bayan)",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Tableeg%2BKya%2BHai_26072017.mp3",
    length: "1h 05m",
    size: "8.44mb",
    date: "26/07/17",
    category: "miscellaneous"
  },
  {
    name: "Namaaz",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Namaz_Belgaum_05_07_2017.mp3",
    length: "41m 25s",
    size: "5.32mb",
    date: "05/07/17",
    category: "miscellaneous"
  },
  {
    name: "Tableeg Ke Maujooda Halat Me Behtareen Rehnumai",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Tableeg%2BKe%2BMaujooda%2BHalat_06072017.mp3",
    length: "1h 09m",
    size: "8.90mb",
    date: "06/07/17",
    category: "miscellaneous"
  },
  {
    name: "Hum Jamat Mein Kyu Nikalte Hai",
    src: "https://archive.org/download/HumJamatMayKuNikalteHayJeddah7JUN2012/Hum-Jamat-May-Ku-Nikalte-HayJeddah7-JUN-2012.mp3",
    length: "39m 52s",
    size: "18.24mb",
    date: "07/06/12",
    category: "miscellaneous"
  },
  {
    name: "Saari Makhlooq Allah Ki Ayaal Hai - 1",
    src: "https://archive.org/download/puranabayan/SaariMakhlooqAllahKiAyaalHaiPart-127Jul2012.mp3",
    length: "29m 50s",
    category: "old bayans",
    size: "3.40mb"
  },
  {
    name: "Takalluf Mein Sarasar Takleef Hai",
    src: "https://archive.org/download/puranabayan/TakallufMainSraaSarTakleefHai.mp3",
    length: "31m 07s",
    category: "old bayans",
    size: "14.20mb"
  },
  {
    name: "Badh Nazri",
    src: "https://archive.org/download/puranabayan/Badh_Nazri.mp3",
    length: "01h 05m",
    category: "old bayans",
    size: "11.20mb"
  },
  {
    name: "Achi Niyyat Se Apne Aamaal Ko Muzaiyan Karein",
    src: "https://archive.org/download/puranabayan/ACHI%20NIYAT%20SAY%20APNE%20AMAAL%20KW%20MUZAIYN%20KARE%2811%20SEP%202011%29.mp3",
    length: "22m 59s",
    category: "old bayans",
    size: "5.30mb"
  }
];

export default data;
