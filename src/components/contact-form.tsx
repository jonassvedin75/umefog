"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Namn måste vara minst 2 tecken." }),
  email: z.string().email({ message: "Ogiltig e-postadress." }),
  message: z.string().min(10, { message: "Meddelandet måste vara minst 10 tecken." }),
});

export function ContactForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form submitted:", values);
        toast({
            title: "Meddelande skickat!",
            description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
        });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Namn</FormLabel>
                            <FormControl>
                                <Input placeholder="Ditt namn" {...field} />
                            </FormControl>                            
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-post</FormLabel>
                            <FormControl>
                                <Input placeholder="din.epost@exempel.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Meddelande</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Hur kan vi hjälpa dig?" className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" size="lg">Skicka meddelande</Button>
            </form>
        </Form>
    );
}
