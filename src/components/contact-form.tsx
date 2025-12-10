import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactForm() {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Kontakta oss</h3>
                <p className="text-muted-foreground">Vi hjälper dig gärna med ditt projekt</p>
            </div>
            
            <div className="grid gap-6">
                <Card className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">E-post</h4>
                            <a href="mailto:info@umefog.se" className="text-muted-foreground hover:text-primary transition-colors">
                                info@umefog.se
                            </a>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Telefon</h4>
                            <a href="tel:+46123456789" className="text-muted-foreground hover:text-primary transition-colors">
                                +46 12 345 67 89
                            </a>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Adress</h4>
                            <p className="text-muted-foreground">
                                Företagsgatan 1<br />
                                123 45 Umeå
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
