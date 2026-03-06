/* =========================
   TYPES (Issue: Langsung di index)
   Tugas: 
    1. Pindahkan ke file khusus (user.type), dalam folder yang sesuai  OK
    2. gunakan export interface ... OK
    3. jadika id opsional -> id?: number OK
   ========================= */
export interface User {
  id?: number;
  name: string;
  role: string;
}
