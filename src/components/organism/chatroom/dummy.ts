import { MessageAssignmentEnum } from "../../atoms/tag";

export const DUMMY_CHAT = [
  {
    id: 1,
    name: "Mary Jane",
    date: "Today, 08:12",
    lastChat: "Ready ga gan barangnya kalo dikirim detik ini juga?",
    unreadChatCount: 1,
    tag: "order, gundam, mainan anak",
    status: MessageAssignmentEnum.waiting,
    session: 0,
    isReplied: false,
  },
  {
    id: 2,
    name: "Mary Jane",
    date: "Today, 06:02",
    lastChat: "Hi Kak, barangnya ready silahkan di order ya!",
    unreadChatCount: 0,
    tag: "order, gundam, mainan anak,order, gundam, mainan anak",
    status: MessageAssignmentEnum.resolved,
    session: 0,
    isReplied: true,
  },
  {
    id: 3,
    name: "Mary Jane",
    date: "Yesterday, 08:01",
    lastChat: "Hi Min, barang ini ready ga ya?",
    unreadChatCount: 2,
    tag: "order, gundam, mainan anak",
    status: MessageAssignmentEnum.assigned,
    session: 1,
    isReplied: false,
  },
  {
    id: 4,
    name: "Mahmud Samrudi Wijaya Kusuma Adiningrat",
    date: "15 Oct 2022, 14:32",
    lastChat: "Kode OTP Anda untuk menggunakan WiFi@Matahari adalah 9437.",
    unreadChatCount: 0,
    tag: null,
    status: MessageAssignmentEnum.campaign,
    session: 2,
    isReplied: true,
  },
  {
    id: 5,
    name: "Mary Jane",
    date: "Today, 06:02",
    lastChat: "Terima kasih kak, ditunggu orderan selanjutnya",
    unreadChatCount: 0,
    tag: "order, gundam, mainan anak",
    status: MessageAssignmentEnum.assigned_to_me,
    session: 0,
    isReplied: true,
  },
  {
    id: 10,
    name: "Mary Jane",
    date: "Today, 08:12",
    lastChat: "Ready ga gan barangnya kalo dikirim detik ini juga?",
    unreadChatCount: 1,
    tag: "order, gundam, mainan anak",
    status: MessageAssignmentEnum.waiting,
    session: 0,
    isReplied: false,
  },
  {
    id: 20,
    name: "Mary Jane",
    date: "Today, 06:02",
    lastChat: "Hi Kak, barangnya ready silahkan di order ya!",
    unreadChatCount: 0,
    tag: "order, gundam, mainan anak,order, gundam, mainan anak",
    status: MessageAssignmentEnum.resolved,
    session: 0,
    isReplied: true,
  },
  {
    id: 30,
    name: "Mary Jane",
    date: "Yesterday, 08:01",
    lastChat: "Hi Min, barang ini ready ga ya?",
    unreadChatCount: 2,
    tag: "order, gundam, mainan anak",
    status: MessageAssignmentEnum.assigned,
    session: 1,
    isReplied: false,
  },
  {
    id: 40,
    name: "Mahmud Samrudi Wijaya Kusuma Adiningrat",
    date: "15 Oct 2022, 14:32",
    lastChat: "Kode OTP Anda untuk menggunakan WiFi@Matahari adalah 9437.",
    unreadChatCount: 0,
    tag: null,
    status: MessageAssignmentEnum.campaign,
    session: 2,
    isReplied: true,
  },
  {
    id: 50,
    name: "Mary Jane",
    date: "Today, 06:02",
    lastChat: "Terima kasih kak, ditunggu orderan selanjutnya",
    unreadChatCount: 0,
    tag: "order, gundam, mainan anak",
    status: MessageAssignmentEnum.assigned_to_me,
    session: 0,
    isReplied: true,
  },
];

export const CHATS = [
  {
    id: 1,
    chat: {
      username: "anggihnurh",
      message: "Mantap ga nih gan barangnya? mantap dong yah..",
      timestamp: "10:20",
      media: null,
    },
    isSelf: true,
    status: 13,
  },
  {
    id: 2,
    chat: {
      username: "nurhidayat",
      message: "Woiya jelas mantap dong!",
      timestamp: "10:21",
      media: null,
    },
    isSelf: false,
    status: 13,
  },
  {
    id: 7,
    chat: {
      username: "nurhidayat",
      message: null,
      timestamp: "11:25",
      media: null,
      images:
        "https://hips.hearstapps.com/bpc.h-cdn.co/assets/16/11/1600x800/landscape-1458242073-new-nike-hyperadapt-shoes.jpg?resize=1200:*",
    },
    isSelf: false,
    status: 13,
  },
  {
    id: 8,
    chat: {
      username: "nurhidayat",
      message: null,
      timestamp: "11:25",
      media: null,
      images:
        "https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80",
    },
    isSelf: false,
    status: 13,
  },
  {
    id: 9,
    chat: {
      username: "nurhidayat",
      message:
        "Tanggal Tua Ga Perlu Khawatir untuk Belanja komputer gaming dengan Diskon Rp 35ribu dari Kartu Kredit Bank Mega! Periode Promo. Voucher Tokopedia cashback 100%, gratis ongkir & diskon hingga 90% hanya bisa dinikmati disaat dan tanggal tertentu.",
      timestamp: "11:25",
      media: null,
      images: [
        "https://i.ibb.co/Wyzvqfv/Image.png",
        "https://i.ibb.co/sQH2bxH/Image-1.png",
        "https://i.ibb.co/vd60SjR/Image-2.png",
        "https://i.ibb.co/hLv2RjK/Type-Landscape.png",
      ],
    },
    isSelf: false,
    status: 13,
  },
  {
    id: 3,
    chat: {
      username: "anggihnurh",
      message: "Gaslah order 10pcs",
      timestamp: "10:22",
      media: null,
    },
    isSelf: true,
    status: 12,
  },
  {
    id: 4,
    chat: {
      username: "anggihnurh",
      message: "Gimana gan kok sepi sepi bae..",
      timestamp: "11:20",
      media: null,
    },
    isSelf: true,
    status: 11,
  },
  {
    id: 5,
    chat: {
      username: "anggihnurh",
      message: "Halooo om?",
      timestamp: "11:30",
      media: null,
    },
    isSelf: true,
    status: 15,
  },
  {
    id: 6,
    chat: {
      username: "anggihnurh",
      message: "Oalah jaringan error tah..",
      timestamp: "11:25",
      media: null,
    },
    isSelf: true,
    status: 14,
  },

  {
    id: 9,
    chat: {
      username: "anggihnurh",
      message:
        "Tanggal Tua Ga Perlu Khawatir untuk Belanja komputer gaming dengan Diskon Rp 35ribu dari Kartu Kredit Bank Mega! Periode Promo. Voucher Tokopedia cashback 100%, gratis ongkir & diskon hingga 90% hanya bisa dinikmati disaat dan tanggal tertentu.",
      timestamp: "11:25",
      media: null,
      images: [
        "https://i.ibb.co/Wyzvqfv/Image.png",
        "https://i.ibb.co/sQH2bxH/Image-1.png",
        "https://i.ibb.co/vd60SjR/Image-2.png",
        "https://i.ibb.co/hLv2RjK/Type-Landscape.png",
        "https://i.ibb.co/Wyzvqfv/Image.png",
        "https://i.ibb.co/sQH2bxH/Image-1.png",
        "https://i.ibb.co/vd60SjR/Image-2.png",
        "https://i.ibb.co/hLv2RjK/Type-Landscape.png",
      ],
    },
    isSelf: true,
    status: 13,
  },
  {
    id: 99,
    chat: {
      username: "anggihnurh",
      message: "cek dis out",
      timestamp: "11:25",
      video:
        "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
      images: null,
    },
    isSelf: true,
    status: 13,
  },
  {
    id: 43,
    chat: {
      username: "anggihnurh",
      message: null,
      timestamp: "11:25",
      video: null,
      images: null,
      file: "this is file",
    },
    isSelf: true,
    status: 13,
  },
];
