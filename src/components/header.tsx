import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href={'login'}>Đăng Nhập</Link>
        </li>
        <li>
          <Link href={'register'}>Đăng Ký</Link>
        </li>
      </ul>
      <ModeToggle />
      header
    </div>
  );
}
