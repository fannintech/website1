export function notFound(_req, res) {
  res.status(404).json({ ok: false, message: "Not found." });
}

export function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  res.status(status).json({
    ok: false,
    message: status === 500 ? "Unable to process this request." : err.message,
  });
}
