import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IncenseWebsite() {
  const whatsappNumber = "212697937497";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const facebookLink = "https://www.facebook.com/share/1CiMufuGjn/";

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <img
          src="/mnt/data/grok_image_1768635105137.jpg"
          alt="Youssef Bokhor Logo"
          className="mx-auto w-28 h-28 object-contain mb-4"
        />
        <h1 className="text-3xl font-bold">🌿 Youssef Bokhor</h1>
        <p className="text-gray-600 mt-2">بخور فاخر • ريحة ثابتة • توصيل لجميع المدن</p>
      </motion.div>

      {/* Hero */}
      <Card className="rounded-2xl shadow-lg mb-6">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">مرحبا بيك 👋</h2>
          <p className="text-gray-600 mb-4">
            كنوفرو أجود أنواع البخور بروائح فواحة وجودة عالية
          </p>

          <div className="grid grid-cols-1 gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-2xl w-full">📱 تواصل معنا على واتساب</Button>
            </a>

            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-2xl w-full">📘 زور صفحتنا على فيسبوك</Button>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {["بخور العود", "بخور المسك", "بخور الورد", "خلطات خاصة"].map((item) => (
          <Card key={item} className="rounded-2xl shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-600">جودة عالية وريحه فواحة</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delivery Info */}
      <Card className="rounded-2xl shadow mb-6">
        <CardContent className="p-4 text-center space-y-1">
          <p>🚚 التوصيل لجميع المدن</p>
          <p>⏱ 24 حتى 48 ساعة</p>
          <p>💰 الدفع عند الاستلام</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500">
        © 2026 Youssef Bokhor — جميع الحقوق محفوظة
      </div>
    </div>
  );
}
