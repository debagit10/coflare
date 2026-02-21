import { motion } from 'framer-motion';
import { RegisterForm } from '@/components/auth/AuthForms';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero px-4 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full"
      >
        <RegisterForm />
      </motion.div>
    </div>
  );
}
