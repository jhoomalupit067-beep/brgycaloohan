import { useState } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import ModalCard from '../components/ModalCard'

const initialArchivedRows = [
  { id: 1, type: 'Lupon', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
  { id: 2, type: 'VAWC', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
  { id: 3, type: 'Complain', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
  { id: 4, type: 'Blotter', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
  { id: 5, type: 'Blotter', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
  { id: 6, type: 'Complain', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
  { id: 7, type: 'VAWC', caseNo: '166-02-2026', name: 'Dela Cruz, Juan Fernandez' },
]

function ArchivedPage() {
  const [rows, setRows] = useState(initialArchivedRows)
  const [selected, setSelected] = useState(null)
  const [mode, setMode] = useState(null) // 'view' | 'restore' | 'delete'

  const openModal = (row, action) => {
    setSelected(row)
    setMode(action)
  }

  const closeModal = () => {
    setSelected(null)
    setMode(null)
  }

  const handleRestore = () => {
    // In real app, send to backend. For now, just close.
    closeModal()
  }

  const handleDelete = () => {
    if (!selected) return
    setRows(rows.filter((r) => r.id !== selected.id))
    closeModal()
  }

  return (
    <DashboardLayout active="archived">
      <section className="rounded-3xl border border-[#c5d3f5] bg-[#f6f8ff] p-4 shadow-md md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-wide text-[#2552c4] md:text-2xl">
            ARCHIVED
          </h1>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#c5d3f5] bg-white shadow">
          <div className="relative max-h-[420px] overflow-auto">
            <table className="min-w-full border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#2552c4] text-left text-xs font-semibold uppercase tracking-wide text-white">
                  <th className="px-4 py-3">Report Type</th>
                  <th className="px-4 py-3">Case no.</th>
                  <th className="px-4 py-3">Resident name</th>
                  <th className="px-4 py-3 text-center">Select</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#f6f8ff]'}
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold text-slate-800">
                      {row.caseNo}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          type="button"
                          className="rounded-md bg-[#2552c4] px-3 py-1 text-xs font-semibold text-white shadow hover:bg-[#1d3f96]"
                          onClick={() => openModal(row, 'view')}
                        >
                          VIEW
                        </button>
                        <button
                          type="button"
                          className="rounded-md bg-[#1fb981] px-3 py-1 text-xs font-semibold text-white shadow hover:bg-[#169263]"
                          onClick={() => openModal(row, 'restore')}
                        >
                          RESTORE
                        </button>
                        <button
                          type="button"
                          className="rounded-md bg-[#f34747] px-3 py-1 text-xs font-semibold text-white shadow hover:bg-[#d33434]"
                          onClick={() => openModal(row, 'delete')}
                        >
                          DELETE
                        </button>
                      </div>
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

        {selected && mode === 'view' && (
          <ModalCard title="Archived Case Details" onClose={closeModal}>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Report Type
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {selected.type}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Case Number
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {selected.caseNo}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500">
                  Resident Name
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {selected.name}
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                This is a sample static description for the archived case. In the
                real system, you can display the full details from your backend.
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-md bg-[#2552c4] px-5 py-2 text-xs font-semibold text-white shadow hover:bg-[#1d3f96]"
                >
                  Close
                </button>
              </div>
            </div>
          </ModalCard>
        )}

        {selected && mode === 'restore' && (
          <ModalCard title="Restore Archived Case" onClose={closeModal}>
            <div className="space-y-4 text-sm">
              <p className="text-slate-700">
                Are you sure you want to restore the case{' '}
                <span className="font-semibold">{selected.caseNo}</span> for{' '}
                <span className="font-semibold">{selected.name}</span>?
              </p>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-md border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleRestore}
                  className="rounded-md bg-[#1fb981] px-5 py-2 text-xs font-semibold text-white shadow hover:bg-[#169263]"
                >
                  Confirm Restore
                </button>
              </div>
            </div>
          </ModalCard>
        )}

        {selected && mode === 'delete' && (
          <ModalCard title="Delete Archived Case" onClose={closeModal}>
            <div className="space-y-4 text-sm">
              <p className="text-slate-700">
                This will permanently remove the archived case{' '}
                <span className="font-semibold">{selected.caseNo}</span> for{' '}
                <span className="font-semibold">{selected.name}</span>.
              </p>
              <p className="text-xs text-red-500">
                This action cannot be undone in this demo.
              </p>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-md border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="rounded-md bg-[#f34747] px-5 py-2 text-xs font-semibold text-white shadow hover:bg-[#d33434]"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </ModalCard>
        )}
      </section>
    </DashboardLayout>
  )
}

export default ArchivedPage

