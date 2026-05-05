export default function BackButton({ onClick, label = '‹ Back' }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 mb-3.5 px-5 py-2.5 rounded-full border border-white/10 text-[#7e79a0] text-sm font-medium transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
    >
      {label}
    </button>
  )
}
