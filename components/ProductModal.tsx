"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/app/models/interfaces";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, open, onClose }: Props) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
          <p className="text-lg font-bold">{product.price}€</p>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p>{product.description}</p>
          <p className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}