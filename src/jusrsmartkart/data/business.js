// Central business / brand information for Jusrsmartkart
export const BUSINESS = {
  name: "Jusrsmartkart",
  tagline: "Smart organization for everyday living",
  intro:
    "Practical storage solutions that keep your home essentials protected, tidy and easy to find.",
  proprietor: "Siddique Alam Shaikh",
  firm: "Zuvox Bag's",
  phone: "9867143868",
  phoneIntl: "919867143868",
  email: "zuvoxbags@gmail.com",
  address: {
    line1: "Plot No. 25-26-27, Jalaram Industrial Estate",
    line2: "Masma Road, Village Masma, Olpad",
    city: "Surat",
    state: "Gujarat",
    pincode: "394540",
    country: "India",
  },
  trademark: {
    mark: "MANI-KREATION",
    type: "Device",
    act: "Trade Marks Act, 1999 (Form TM-A)",
    refNo: "15240466",
    class: "Class 20",
    jurisdiction: "Ahmedabad",
    status: "Proposed to be used",
    ownership: "Individual / Sole Proprietor",
    fee: "INR 4,500",
    applicant: "SIDDIQUE ALAM SHAIKH PROPRIETOR OF ZUVOX BAG'S",
    category: "Single Firm",
    goods:
      "Furniture, mirrors, picture frames; goods of wood, cork, reed, cane, wicker, horn, bone, ivory, shell, plastics and substitutes as per Class 20.",
    agent: "KOMALAHUJA, Advocate",
    serviceAddress:
      "Office No. 115, First Floor, GD-ITL Tower, Plot No. B-8, Netaji Subhash Place, Delhi - 110034",
  },
};

export const fullAddress = [
  BUSINESS.address.line1,
  BUSINESS.address.line2,
  `${BUSINESS.address.city}, ${BUSINESS.address.state} - ${BUSINESS.address.pincode}`,
  BUSINESS.address.country,
].join(", ");

export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(
    message ||
      "Hi Jusrsmartkart, I'd like to know more about your storage organizers.",
  )}`;

export const telLink = `tel:+${BUSINESS.phoneIntl}`;
export const mailLink = `mailto:${BUSINESS.email}`;
