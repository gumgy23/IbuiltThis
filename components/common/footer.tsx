export default function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="wrapper">
        IBuiltThis &copy; {new Date().getFullYear()} - All rights reserved.
      </div>
    </footer>
  );
}