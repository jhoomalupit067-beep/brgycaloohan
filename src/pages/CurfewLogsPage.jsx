import { useState } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import ModalCard from '../components/ModalCard'

const initialCurfewRows = [
  {
    id: '01',
    name: 'Reyes, Timothy G.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
  {
    id: '02',
    name: 'Ramos, Kristine F.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
  {
    id: '03',
    name: 'Santiago, Leo E.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
  {
    id: '04',
    name: 'Reyes, Timothy G.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
  {
    id: '05',
    name: 'Ramos, Kristine F.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
  {
    id: '06',
    name: 'Santiago, Leo E.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
  {
    id: '07',
    name: 'Santiago, Leo E.',
    address: 'BLK 1 LOT 2, CALOOCAN CITY, METRO MANILA, PHILIPPINES',
    age: '15 YEARS OLD',
  },
]

function CurfewLogsPage() {
  const [rows, setRows] = useState(initialCurfewRows)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDateModal, setShowDateModal] = useState(false)
  const [form, setForm] = useState({
    name: '',
    address: '',
    age: '',
  })

  const handleAddSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.address || !form.age) return

    const nextId = String(rows.length + 1).padStart(2, '0')
    setRows([
      ...rows,
      {
        id: nextId,
        name: form.name,
        address: form.address,
        age: `${form.age.toUpperCase()}`,
      },
    ])
    setForm({ name: '', address: '', age: '' })
    setShowAddModal(false)
  }

  return (
    <DashboardLayout active="curfew">
      <section className="rounded-3xl border border-[#c5d3f5] bg-[#f6f8ff] p-4 shadow-md md:p-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-extrabold tracking-wide text-[#2552c4] md:text-2xl">
            CURFEW LOGS
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-[#2552c4] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#1d3f96]"
              onClick={() => setShowDateModal(true)}
            >
              <img src="/src/assets/calendar.svg" alt="logo" className="h-5 w-5" />
              <span>01-15-2026</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1a3a8a] to-[#1b9ad4] px-5 py-2 text-sm font-semibold text-white shadow hover:from-[#142c6a] hover:to-[#1478a4]"
              onClick={() => setShowAddModal(true)}
            >
              <img src="/src/assets/curcur.svg" alt="logo" className="h-5 w-5" />
              <span>Add Curfew</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#c5d3f5] bg-white shadow">
          <div className="relative max-h-[420px] overflow-auto">
            <table className="min-w-full border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#2552c4] text-left text-xs font-semibold uppercase tracking-wide text-white">
                  <th className="px-4 py-3 text-center">No.</th>
                  <th className="px-4 py-3">Resident Name</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3 text-center">Age</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#f6f8ff]'}
                  >
                    <td className="px-4 py-3 text-center text-xs font-semibold text-slate-700">
                      {row.id}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-700">
                      {row.address}
                    </td>
                    <td className="px-4 py-3 text-center text-xs font-semibold text-slate-800">
                      {row.age}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="border-t border-[#c5d3f5] bg-white py-4 text-center text-sm font-semibold tracking-wide text-slate-500">
                    ---------- NOTHING FOLLOWS ----------
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {showAddModal && (
          <ModalCard title="Add Curfew Record" onClose={() => setShowAddModal(false)}>
            <form onSubmit={handleAddSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-600">
                    Resident Name
                  </span>
                  <input
                    type="text"
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2552c4]"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Last name, First name M."
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-600">Age</span>
                  <input
                    type="text"
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2552c4]"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    placeholder="15 YEARS OLD"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-600">Address</span>
                <input
                  type="text"
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2552c4]"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Complete address"
                />
              </label>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-md border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#1b9ad4] px-5 py-2 text-xs font-semibold text-white shadow hover:bg-[#1478a4]"
                >
                  Save
                </button>
              </div>
            </form>
          </ModalCard>
        )}

        {showDateModal && (
          <ModalCard
            title="Select Date"
            onClose={() => setShowDateModal(false)}
            widthClass="max-w-sm"
          >
            <div className="space-y-4 text-sm">
              <input
                type="date"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2552c4]"
                defaultValue="2026-01-15"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowDateModal(false)}
                  className="rounded-md border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => setShowDateModal(false)}
                  className="rounded-md bg-[#2552c4] px-5 py-2 text-xs font-semibold text-white shadow hover:bg-[#1d3f96]"
                >
                  Apply
                </button>
              </div>
            </div>
          </ModalCard>
        )}
      </section>
    </DashboardLayout>
  )
}

export default CurfewLogsPage

