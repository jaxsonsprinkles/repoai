export default function SummaryModal({
  isOpen,
  summary,
  loading,
  fileName,
  onClose,
}) {
  if (!isOpen) return null;
  return (
    <dialog open className="modal">
      <div className="modal-box border-2">
        <form method="dialog">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div>
          {loading ? (
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Analyzing {fileName}...
              </h2>
              <div className="flex flex-col gap-2 p-3">
                {[...Array(9)].map((_, i) => {
                  return (
                    <div
                      key={i}
                      className={`skeleton h-4 ${i == 8 ? "w-1/2" : ""}`}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold">
                AI Summary of {fileName}
              </h2>
              <p className="py-3">{summary}</p>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
