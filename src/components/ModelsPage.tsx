import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ShoppingCart, 
  Send, 
  Truck, 
  Ticket, 
  Globe, 
  AlertCircle, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MODELS_DATA = [
  {
    id: 'instore',
    title: 'The InStore Model (Merchant QR)',
    problem: 'Cash dependency and slow checkout at physical retail locations.',
    solution: 'A standard Merchant-at-POS (Point of Sale) system using QR codes.',
    edge: 'Integrated directly with HelloCash wallets for instant settlement.',
    launch: 'Elton (Ivory Coast) fuel stations and VitaBirr local merchants.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/instore-model-67539120-1775528751706.webp',
    icon: <ShoppingCart className="text-emerald-400" size={32} />
  },
  {
    id: 'disbursement',
    title: 'The Disbursement Model (G2P/B2P)',
    problem: 'High leakage and lack of transparency in bulk aid or salary payments.',
    solution: 'A bulk-payout engine that sends funds to thousands of digital wallets simultaneously.',
    edge: 'Supports "Closed-Loop" spending\\u2014ensuring funds are only spent at authorized locations.',
    launch: 'WFP (Ethiopia) targeting 300,000 beneficiaries.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/disbursement-model-92a6f58b-1775528751098.webp',
    icon: <Send className="text-emerald-400" size={32} />
  },
  {
    id: 'distribution',
    title: 'The Distribution Model (Supply Chain)',
    problem: 'Wholesalers struggle to track inventory and payments from a fragmented network of small retailers.',
    solution: 'A B2B rail that connects the Wholesaler to the Retailer.',
    edge: 'This is where the BNPL (Buy Now, Pay Later) facility sits. We provide the credit that allows the retailer to buy more stock from the wholesaler instantly.',
    launch: 'VitaBirr Group 50,000-merchant network.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/distribution-model-0f23fd5c-1775528751750.webp',
    icon: <Truck className="text-emerald-400" size={32} />
  },
  {
    id: 'sponsored',
    title: 'The Sponsored Model (Gift Cards & Vouchers)',
    problem: 'Difficulties in sending targeted support (e.g., "This $50 is specifically for medicine").',
    solution: 'Digital "Tagged" vouchers and gift cards.',
    edge: 'Uses OCR and secure voucher codes to ensure the gift is redeemed at the correct vertical.',
    launch: 'Your Health My Gift (Kenya) with the Pharmaceutical Society of Kenya (PSK).',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/improved-sponsored-model-illustration-4ccb2157-1775529964396.webp',
    icon: <Ticket className="text-emerald-400" size={32} />
  },
  {
    id: 'marketplace',
    title: 'The Marketplace/eCommerce Model (Online)',
    problem: 'Lack of a trusted payment gateway for African SMEs to sell online.',
    solution: 'An integrated "Check-out" button and mini-storefront for any business or association.',
    edge: 'Powered by the MamaPays rail, allowing international users to pay for local services/goods seamlessly.',
    launch: 'Cross-border trade support for SMEs in the BelCash ecosystem.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/marketplace-model-1453af97-1775528750167.webp',
    icon: <Globe className="text-emerald-400" size={32} />
  }
];

const ModelsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20"
        >
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1 uppercase tracking-widest">HellOOpass OS</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">The 5 Strategic Models</h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            To bring the HellOOpass OS to life, we categorize our operations into five independent business engines that BelCash licenses to associations, businesses, and NGOs.
          </p>
        </motion.div>

        <div className="space-y-40">
          {MODELS_DATA.map((model, index) => (
            <div 
              key={model.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl shadow-emerald-900/20 group-hover:border-emerald-500/50 transition-colors duration-500">
                    <img 
                      src={model.image} 
                      alt={model.title} 
                      className="w-full aspect-[4/3] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-slate-900/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-slate-700">
                      {model.icon}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{model.title}</h2>
                  <div className="h-1 w-20 bg-emerald-600"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 mt-1">
                      <AlertCircle size={18} />
                    </div>
                    <div>
                      <h4 className="text-red-400 font-bold uppercase text-xs tracking-widest mb-1">The Problem</h4>
                      <p className="text-slate-300 text-lg">{model.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-900/20 flex items-center justify-center text-emerald-400 mt-1">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-1">The Solution</h4>
                      <p className="text-white text-lg font-medium">{model.solution}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-900/50 border border-emerald-900/30 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <Zap className="text-emerald-500" size={40} />
                    </div>
                    <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-2">The BelCash Edge</h4>
                    <p className="text-slate-200">{model.edge}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <Badge variant="outline" className="border-slate-700 text-slate-400 uppercase text-[10px]">Current Launch</Badge>
                  <p className="text-emerald-400 font-semibold flex items-center gap-2">
                    {model.launch}
                    <ArrowRight size={14} />
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Business Model Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <Card className="bg-emerald-900/10 border-emerald-900/30 p-12 rounded-[3rem] text-center">
            <h2 className="text-3xl font-bold text-white mb-6">The "Processor" Business Model</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              BelCash operates as a high-volume financial processor. Each of these models feeds transaction volume into the central HelloCash ledger, generating predictable, scalable revenue across 54 Nations - <span className="text-emerald-500">Plug and Trade</span>.
            </p>
            <div className="flex justify-center">
              <Badge className="bg-emerald-500 text-slate-950 font-bold px-6 py-2 text-lg">
                1% Average Processor Fee
              </Badge>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default ModelsPage;