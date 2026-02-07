import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



interface LoginFormProps extends React.ComponentProps<"div"> {
  onLogin: () => void;
}

export function LoginForm({ className, onLogin, ...props }: LoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border border-border/60 shadow-lg bg-card/80 backdrop-blur-md">
        <CardHeader className="text-center space-y-4">
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold tracking-tight drop-shadow-sm">
              Boon
            </CardTitle>
            <CardDescription className="text-base drop-shadow-sm">
              One prompt. Watch it go live.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button
              onClick={onLogin}
              size="lg"
              className="w-full h-12 text-base font-medium"
              aria-label="Get started"
            >
              Get Started
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground drop-shadow-sm">
            Connect your wallet or sign in to start building
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-balance text-muted-foreground drop-shadow-sm">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
