import { useState } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek, isBefore, startOfToday } from 'date-fns';
import { sl } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Users, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingFormProps {
  type: 'room' | 'spa';
  title?: string;
  subtitle?: string;
}

export default function BookingForm({ type, title, subtitle }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const today = startOfToday();
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  
  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  return (
    <div className="bg-white rounded-[40px] md:rounded-[60px] luxury-shadow overflow-hidden border border-brand-wood/5">
      <div className="p-8 md:p-12 bg-brand-wood text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <span className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold block mb-4 font-display">
          {subtitle || (type === 'room' ? 'Povpraševanje za rezervacijo' : 'Rezervacija termina')}
        </span>
        <h3 className="text-3xl md:text-4xl font-serif italic mb-2">
          {title || (type === 'room' ? 'Rezervirajte svoj oddih' : 'Vaš privatni SPA')}
        </h3>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1 flex-1 rounded-full transition-all duration-700 ${
                step >= s ? 'bg-brand-gold' : 'bg-brand-wood/10'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-brand-wood font-serif italic text-xl">Izberite datum</h4>
                <div className="flex gap-2">
                  <button onClick={prevMonth} className="p-2 hover:text-brand-gold transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={nextMonth} className="p-2 hover:text-brand-gold transition-colors"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>

              <div className="mb-4 text-center font-display text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                {format(currentMonth, 'MMMM yyyy', { locale: sl })}
              </div>

              <div className="grid grid-cols-7 gap-2 mb-8">
                {['Po', 'To', 'Sr', 'Če', 'Pe', 'So', 'Ne'].map((day) => (
                  <div key={day} className="text-center text-[9px] uppercase font-bold text-brand-stone/40 py-2">{day}</div>
                ))}
                {calendarDays.map((day, i) => {
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  const isCurrentMonth = isSameMonth(day, monthStart);
                  const isPast = isBefore(day, today);
                  
                  return (
                    <button
                      key={i}
                      disabled={isPast || !isCurrentMonth}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        aspect-square flex items-center justify-center rounded-2xl text-xs transition-all duration-300
                        ${!isCurrentMonth ? 'text-transparent pointer-events-none' : ''}
                        ${isPast ? 'text-brand-stone/20 cursor-not-allowed' : 'text-brand-wood hover:bg-brand-gold/10'}
                        ${isSelected ? 'bg-brand-gold text-white shadow-lg scale-110 !text-white' : ''}
                      `}
                    >
                      {format(day, 'd')}
                    </button>
                  );
                })}
              </div>

              <button 
                disabled={!selectedDate}
                onClick={() => setStep(2)}
                className="w-full bg-brand-wood text-brand-cream py-6 rounded-2xl font-display uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-brand-gold hover:text-brand-wood transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
              >
                Nadaljuj na podrobnosti
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-[9px] uppercase tracking-widest font-bold text-brand-gold mb-3 block">Vaše Ime</label>
                    <input type="text" placeholder="Ime in priimek" className="w-full bg-brand-warm-gray border-none rounded-2xl px-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold transition-all" />
                 </div>
                 <div>
                    <label className="text-[9px] uppercase tracking-widest font-bold text-brand-gold mb-3 block">Email naslov</label>
                    <input type="email" placeholder="vas@email.com" className="w-full bg-brand-warm-gray border-none rounded-2xl px-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold transition-all" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-[9px] uppercase tracking-widest font-bold text-brand-gold mb-3 block">
                      {type === 'room' ? 'Število oseb' : 'Število oseb (max 4)'}
                    </label>
                    <div className="relative">
                       <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-stone/40" />
                       <select className="w-full bg-brand-warm-gray border-none rounded-2xl pl-14 pr-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold appearance-none transition-all">
                          <option>1 oseba</option>
                          <option>2 osebi</option>
                          <option>3 osebe</option>
                          <option>4 osebe</option>
                       </select>
                    </div>
                 </div>
                 <div>
                    <label className="text-[9px] uppercase tracking-widest font-bold text-brand-gold mb-3 block">
                       {type === 'room' ? 'Število nočitev' : 'Izberite paket'}
                    </label>
                    <div className="relative">
                       <Clock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-stone/40" />
                       <select className="w-full bg-brand-warm-gray border-none rounded-2xl pl-14 pr-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold appearance-none transition-all">
                          {type === 'room' ? (
                            <>
                              <option>1 noč</option>
                              <option>2 noči</option>
                              <option>3 noči</option>
                              <option>Več dni (vpišite spodaj)</option>
                            </>
                          ) : (
                            <>
                              <option>Osnovni (2 uri)</option>
                              <option>Premium (3 ure)</option>
                              <option>Večerni termin</option>
                            </>
                          )}
                       </select>
                    </div>
                 </div>
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-widest font-bold text-brand-gold mb-3 block">Posebne želje</label>
                <textarea rows={3} placeholder="Imate kakšne posebne zahteve?" className="w-full bg-brand-warm-gray border-none rounded-3xl px-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold transition-all resize-none"></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={() => setStep(1)} className="px-8 border border-brand-wood/10 rounded-2xl hover:bg-brand-warm-gray transition-colors font-display text-[8px] uppercase tracking-widest font-bold">Nazaj</button>
                <button onClick={() => setStep(3)} className="flex-1 bg-brand-wood text-brand-cream py-6 rounded-2xl font-display uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-brand-gold hover:text-brand-wood transition-all shadow-lg">Pošlji povpraševanje</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 px-8"
            >
              <div className="w-24 h-24 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-10">
                 <CalendarIcon className="w-10 h-10 text-brand-gold" />
              </div>
              <h3 className="text-4xl font-serif italic mb-6">Hvala za povpraševanje!</h3>
              <p className="text-brand-stone font-serif italic text-lg leading-relaxed mb-12">
                Vaš interes smo prejeli. Preverili bomo razpoložljivost in vam odgovorili na vaš email naslov v najkrajšem možnem času.
              </p>
              <button 
                onClick={() => { setStep(1); setSelectedDate(null); }}
                className="text-brand-gold boutique-underline uppercase tracking-[0.3em] text-[10px] font-bold font-display py-2"
              >
                Nova rezervacija
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-brand-warm-gray py-6 px-12 border-t border-brand-wood/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
          <span className="text-[8px] uppercase tracking-widest font-bold text-brand-wood/40">Zadnje prosto mesto: Danes</span>
        </div>
        <span className="text-[8px] uppercase tracking-widest font-bold text-brand-stone/30 italic">Guest House Pod Slavnikom</span>
      </div>
    </div>
  );
}
