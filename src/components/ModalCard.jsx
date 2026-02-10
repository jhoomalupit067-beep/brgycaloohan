import PropTypes from 'prop-types'

function ModalCard({ title, onClose, children, widthClass = 'max-w-xl' }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity">
      <div
        className={`w-full ${widthClass} relative flex max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-[#c5d3f5] bg-white shadow-2xl`}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b border-slate-200 p-4 md:p-6">
          <h2 className="text-lg font-bold tracking-wide text-[#2552c4]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-200"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

ModalCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  widthClass: PropTypes.string,
}

export default ModalCard

