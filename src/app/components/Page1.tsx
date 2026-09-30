const pageImage = '/assets/page-image.png';

export default function Page1() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <img 
        src={pageImage}
        alt="Page 1"
        className="max-w-[90vw] max-h-[90vh] object-contain"
      />
    </div>
  );
}
