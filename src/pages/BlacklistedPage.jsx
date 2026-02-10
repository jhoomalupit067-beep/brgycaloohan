import { useState } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import ModalCard from '../components/ModalCard'

const initialBlacklistRows = Array.from({ length: 7 }, (_, index) => ({
  id: `0${index + 1}`,
  household: 'HN021040761',
  name: 'Dela Cruz, Juan Fernandez',
}))

function BlacklistedPage() {
  const [rows, setRows] = useState(initialBlacklistRows)
  const [showAddModal, setShowAddModal] = useState(false)
  const [form, setForm] = useState({
    name: '',
    household: '',
  })

  const handleAddSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.household) return

    const nextId = String(rows.length + 1).padStart(2, '0')
    setRows([
      ...rows,
      {
        id: nextId,
        household: form.household,
        name: form.name,
      },
    ])
    setForm({ name: '', household: '' })
    setShowAddModal(false)
  }

  return (
    <DashboardLayout active="blacklisted">
      <section className="rounded-3xl border border-[#c5d3f5] bg-[#f6f8ff] p-4 shadow-md md:p-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-extrabold tracking-wide text-[#2552c4] md:text-2xl">
            BLACKLISTED
          </h1>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1a3a8a] to-[#1b9ad4] px-5 py-2 text-sm font-semibold text-white shadow hover:from-[#142c6a] hover:to-[#1478a4] sm:w-auto"
            onClick={() => setShowAddModal(true)}
          >
            <img src="/src/assets/curcur.svg" alt="logo" className="h-5 w-5" />
            <span>Add Blacklisted</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#c5d3f5] bg-white shadow">
          <div className="relative max-h-[420px] overflow-auto">
            <table className="min-w-full border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#2552c4] text-left text-xs font-semibold uppercase tracking-wide text-white">
                  <th className="px-4 py-3 text-center">No.</th>
                  <th className="px-4 py-3">Resident Picture</th>
                  <th className="px-4 py-3">Household Number</th>
                  <th className="px-4 py-3">
                    Resident name
                    <span className="block text-[10px] font-normal">
                      (Last name - First Name, Middle Name)
                    </span>
                  </th>
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
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-slate-200" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold text-slate-800">
                      {row.household}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {row.name}
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
          <ModalCard
            title="Add Blacklisted Resident"
            onClose={() => setShowAddModal(false)}
          >
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
                    placeholder="Last name, First name"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-600">
                    Household Number
                  </span>
                  <input
                    type="text"
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2552c4]"
                    value={form.household}
                    onChange={(e) =>
                      setForm({ ...form, household: e.target.value })
                    }
                    placeholder="HNXXXXXXXXX"
                  />
                </label>
              </div>
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
      </section>
    </DashboardLayout>
  )
}

export default BlacklistedPage

