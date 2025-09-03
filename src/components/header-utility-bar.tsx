import { Phone, Mail } from "lucide-react";

export function HeaderUtilityBar() {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-end items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>info@advanceiot.com</span>
        </div>
      </div>
    </div>
  );
}
