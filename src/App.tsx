import { Switch, Route, Router as WouterRouter } from "wouter";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { Toaster } from "@/components/ui/toaster";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import NotFound from "@/pages/not-found";

  import Home from "@/pages/Home";
  import HowItWorks from "@/pages/HowItWorks";
  import About from "@/pages/About";
  import Legal from "@/pages/Legal";
  import Cookies from "@/pages/Cookies";
  import Push from "@/pages/Push";
  import Journal from "@/pages/Journal";

  import { Nav } from "@/components/layout/Nav";
  import { Footer } from "@/components/layout/Footer";
  import { Cursor } from "@/components/ui/Cursor";
  import { Intro } from "@/components/ui/Intro";
  import { CookieBanner } from "@/components/ui/CookieBanner";
  import { InstallPrompt } from "@/components/ui/InstallPrompt";
  import { ScrollProgress } from "@/components/ui/ScrollProgress";

  import { useEffect } from "react";

  const queryClient = new QueryClient();

  function ServiceWorkerRegistrar() {
    useEffect(() => {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/sw.js").catch(() => {});
        });
      }
    }, []);
    return null;
  }

  function Router() {
    return (
      <div className="flex flex-col min-h-screen relative z-10">
        <Nav />
        <main className="flex-grow pt-32">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/about" component={About} />
            <Route path="/journal" component={Journal} />
            <Route path="/legal" component={Legal} />
            <Route path="/cookies" component={Cookies} />
            <Route path="/push" component={Push} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

  function AmbientBackground() {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#c8b89a]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-[#7a8bad]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '13s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#a88a9c]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '15s', animationDelay: '5s' }} />
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz4KPC9zdmc+')] mix-blend-overlay pointer-events-none" />
      </div>
    );
  }

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ServiceWorkerRegistrar />
          <ScrollProgress />
          <Cursor />
          <Intro />
          <AmbientBackground />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <CookieBanner />
          <InstallPrompt />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  export default App;
  